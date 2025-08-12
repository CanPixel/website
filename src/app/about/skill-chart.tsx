import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

// ======================
// Skills Data
// ======================
const skillsData = [
  { name: "HTML", value: 95 },
  { name: "JavaScript", value: 90 },
  { name: "Unity C#", value: 90 },
  { name: "PHP", value: 80 },
  { name: "LUA", value: 45 },
  { name: "MySQL", value: 70 },
  { name: "C++", value: 50 },
  { name: "Java", value: 80 },
  { name: "Python", value: 50 },
  { name: "Arduino", value: 65 }
];

// Color palette for charts
const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#845EC2", "#FF6F91", "#2C73D2", "#008E9B", "#D65DB1", "#FF9671"];

// ======================
// Style 1: Animated Horizontal Bars
// ======================
const SkillsBars = ({ skills }) => {
  return (
    <div className="p-6 space-y-4">
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span>{skill.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full"
              style={{
                width: `${skill.value}%`,
                background: COLORS[i % COLORS.length],
                transition: "width 1s ease-in-out"
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ======================
// Style 2: Pie Chart (Recharts)
// ======================
const SkillsPie = ({ skills }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={skills}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {skills.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

// ======================
// Style 3: Radial Bar Chart (Circular meters)
// ======================
const SkillsRadial = ({ skills }) => (
  <ResponsiveContainer width="100%" height={350}>
    <RadialBarChart
      cx="50%"
      cy="50%"
      innerRadius="20%"
      outerRadius="90%"
      barSize={10}
      data={skills.map((s, i) => ({ ...s, fill: COLORS[i % COLORS.length] }))}
    >
      <RadialBar minAngle={15} clockWise dataKey="value" />
    </RadialBarChart>
  </ResponsiveContainer>
);

// ======================
// Style 4: Threshold Badges
// ======================
const SkillsBadges = ({ skills }) => {
  const getLevel = (val) => {
    if (val >= 85) return "Expert";
    if (val >= 70) return "Advanced";
    if (val >= 50) return "Intermediate";
    return "Beginner";
  };
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="p-4 rounded-lg shadow-md border flex flex-col items-center"
          style={{ borderColor: COLORS[i % COLORS.length] }}
        >
          <span className="text-lg font-semibold">{skill.name}</span>
          <span className="text-2xl font-bold" style={{ color: COLORS[i % COLORS.length] }}>
            {skill.value}%
          </span>
          <span className="text-sm opacity-70">{getLevel(skill.value)}</span>
        </div>
      ))}
    </div>
  );
};

// ======================
// Main Wrapper with Toggle
// ======================
export default function SkillsShowcase() {
  const [styleIndex, setStyleIndex] = useState(0);

  const components = [
    { name: "Horizontal Bars", comp: <SkillsBars skills={skillsData} /> },
    { name: "Pie Chart", comp: <SkillsPie skills={skillsData} /> },
    { name: "Radial Bars", comp: <SkillsRadial skills={skillsData} /> },
    { name: "Threshold Badges", comp: <SkillsBadges skills={skillsData} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex gap-2 mb-4 flex-wrap">
        {components.map((c, i) => (
          <button
            key={i}
            onClick={() => setStyleIndex(i)}
            className={`px-4 py-2 rounded ${
              styleIndex === i ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="border rounded-lg shadow">{components[styleIndex].comp}</div>
    </div>
  );
}