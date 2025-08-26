import React, { useEffect, useMemo, useState, useRef } from "react";

const PALETTE = ["#0ea5a4", "#0369a1", "#ef4444", "#f59e0b", "#7c3aed", "#db2777", "#2563eb", "#16a34a", "#f97316", "#06b6d4"];

// =====================
// === Helper Hooks ===
// Animated numeric counter from 0 -> target (duration ms)
function useCountUp(target, duration = 800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = null;
    const start = performance.now();
    const from = 0;
    const diff = target - from;
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(from + diff * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

// Tooltip hook
function useTooltip() {
  const [tip, setTip] = useState({ visible: false, x: 0, y: 0, html: null });
  function show(e, html) {
    const rect = e.currentTarget.getBoundingClientRect();
    setTip({ visible: true, x: rect.right + 12, y: rect.top, html });
  }
  function hide() {
    setTip((t) => ({ ...t, visible: false }));
  }
  return { tip, show, hide };
}

// =====================
// === Visualization Components ===

// 1) Animated Horizontal Bars with counts and tooltip
function BarsView({ skills, palette, tooltip }) {
  return (
    <div className="space-y-4 p-6">
      {skills.map((s, i) => (
        <BarRow key={s.id} skill={s} color={palette[i % palette.length]} tooltip={tooltip} />
      ))}
    </div>
  );
}
function BarRow({ skill, color, tooltip }) {
  const displayed = useCountUp(skill.value, 900);
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <div className="w-2 h-6 rounded-sm" style={{ background: color }} />
          <div className="text-sm font-medium">{skill.name}</div>
        </div>
        <div className="text-sm font-semibold">{displayed}%</div>
      </div>
      <div
        className="h-3 w-full bg-slate-200 rounded overflow-hidden transition-shadow group-hover:shadow-lg"
        onMouseEnter={(e) => tooltip.show(e, `<strong>${skill.name}</strong><div>${skill.desc}</div>`) }
        onMouseLeave={() => tooltip.hide()}
      >
        <div
          className="h-3 rounded"
          style={{ width: `${skill.value}%`, background: color, transition: "width 800ms cubic-bezier(.2,.9,.2,1)" }}
        />
      </div>
    </div>
  );
}

// 2) Pie / Donut SVG (proportionally sized slices)
function PieView({ skills, palette, tooltip }) {
  const total = useMemo(() => skills.reduce((a, b) => a + b.value, 0), [skills]);
  let cur = 0;
  return (
    <div className="p-6 flex flex-wrap gap-6 justify-center items-start">
      <svg width="360" height="360" viewBox="0 0 360 360">
        <g transform="translate(180,180)">
          {skills.map((s, i) => {
            const start = cur / total;
            cur += s.value;
            const end = cur / total;
            const large = end - start > 0.5 ? 1 : 0;
            const startRad = 2 * Math.PI * start - Math.PI / 2;
            const endRad = 2 * Math.PI * end - Math.PI / 2;
            const x1 = Math.cos(startRad) * 140;
            const y1 = Math.sin(startRad) * 140;
            const x2 = Math.cos(endRad) * 140;
            const y2 = Math.sin(endRad) * 140;
            const d = `M 0 0 L ${x1} ${y1} A 140 140 0 ${large} 1 ${x2} ${y2} Z`;
            return (
              <path
                key={s.id}
                d={d}
                fill={palette[i % palette.length]}
                stroke="#fff"
                strokeWidth="1"
                onMouseEnter={(e) => tooltip.show(e, `<strong>${s.name}</strong><div>${s.value}%</div><div>${s.desc}</div>`) }
                onMouseLeave={() => tooltip.hide()}
                style={{ transition: "transform .25s" }}
              />
            );
          })}
          <circle r="80" fill="#0f172a" />
          <text x="0" y="0" textAnchor="middle" fill="#fff" fontSize="18" dy="6">Skills</text>
        </g>
      </svg>
      <div className="w-60">
        {skills.map((s, i) => (
          <LegendRow key={s.id} color={palette[i % palette.length]} skill={s} tooltip={tooltip} />
        ))}
      </div>
    </div>
  );
}
function LegendRow({ skill, color, tooltip }) {
  return (
    <div
      className="flex items-center gap-3 py-2 cursor-default"
      onMouseEnter={(e) => tooltip.show(e, `<strong>${skill.name}</strong><div>${skill.value}%</div><div>${skill.desc}</div>`) }
      onMouseLeave={() => tooltip.hide()}
    >
      <div style={{ width: 14, height: 14, background: color }} className="rounded-sm flex-shrink-0" />
      <div className="flex-1">
        <div className="text-sm font-medium">{skill.name}</div>
        <div className="text-xs opacity-70">{skill.value}%</div>
      </div>
    </div>
  );
}

// =====================
// === Main Showcase ===
export default function SkillsShowcase({ skills }) {
  const [view, setView] = useState(0);
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState([]);
  const tooltip = useTooltip();
  const views = [
    { key: 'bars', label: 'Bars' },
    { key: 'pie', label: 'Pie' },
  ];

  // derive categories dynamically
  const categories = useMemo(() => {
    const set = new Set();
    skills.forEach(s => s.categories.forEach(c => set.add(c)));
    return Array.from(set);
  }, [skills]);

  // Filtered skills
  const filtered = useMemo(() => {
    return skills
      .filter(s => (!activeCats.length || s.categories.some(c => activeCats.includes(c))))
      .filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
  }, [skills, activeCats, query]);

  // palette slice to stay stable length
  const palette = PALETTE;

  // fade transition ref
  const contentRef = useRef(null);
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = 'translateY(6px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 320ms ease, transform 320ms ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0px)';
    }, 10);
    return () => clearTimeout(t);
  }, [view, filtered]);

  function toggleCat(cat) {
    setActiveCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  }

  return (
    <div className="max-w-5xl mx-auto p-4 mt-2">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-extrabold">.Skills</h3>
          <p className="text-sm text-slate-500">Interactive showcase — toggle views, filter categories, and hover for details.</p>
        </div>
        <div className="flex gap-2 items-center">
          <input
            placeholder="Search skills..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="border rounded px-3 py-2 text-sm text-black w-56"
          />
          <div className="flex gap-2 items-center">
            {views.map((v, i) => (
              <button
                key={v.key}
                onClick={() => setView(i)}
                className={`px-3 py-2 rounded hover:bg-indigo-800 text-sm ${view === i ? 'bg-indigo-600 text-white' : 'bg-primary'}`}
              >{v.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => toggleCat(cat)}
            className={`px-3 py-1 rounded hover:bg-indigo-800 text-sm ${activeCats.includes(cat) ? 'bg-indigo-600 text-white' : 'bg-primary'}`}
          >{cat}</button>
        ))}
        <button onClick={() => setActiveCats([])} className="px-3 py-1 rounded text-sm hover:bg-red-800 bg-red-500">Clear</button>
      </div>

      <div className="relative border rounded-lg bg-black-900" style={{ minHeight: 220 }}>
        <div ref={contentRef}>
          {view === 0 && <BarsView skills={filtered} palette={palette} tooltip={tooltip} />}
          {view === 1 && <PieView skills={filtered} palette={palette} tooltip={tooltip} />}

          {filtered.length === 0 && (
            <div className="p-6 text-center text-slate-500">No skills match your filters.</div>
          )}
        </div>

        {/* Tooltip overlay */}
        {tooltip.tip.visible && (
          <div
            className="pointer-events-none fixed z-50 max-w-xs rounded border bg-black-900 shadow-lg p-3 text-sm"
            style={{ left: tooltip.tip.x, top: Math.max(8, tooltip.tip.y) }}
            dangerouslySetInnerHTML={{ __html: tooltip.tip.html }}
          />
        )}
      </div>

      <div className="mt-3 text-xs text-slate-500"><code>These are estimations as I keep learning every day.</code></div>
    </div>
  );
}