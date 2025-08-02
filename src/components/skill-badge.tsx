import { cn } from "@/lib/utils";
import Image from "next/image";

type SkillBadgeProps = {
  technology: string;
};

const techColorMap: Record<string, { bg: string; text: string, border: string, logo?: string }> = {
  // Frontend
  "React": { bg: "rgba(97, 218, 251, 0.1)", text: "#61DAFB", border: "rgba(97, 218, 251, 0.3)", logo: "/logos/react.svg" },
  "Next.js": { bg: "rgba(255, 255, 255, 0.1)", text: "#FFFFFF", border: "rgba(255, 255, 255, 0.3)", logo: "/logos/nextjs.svg" },
  "TypeScript": { bg: "rgba(49, 120, 198, 0.1)", text: "#3178C6", border: "rgba(49, 120, 198, 0.3)", logo: "/logos/typescript.svg" },
  "JavaScript": { bg: "rgba(247, 223, 30, 0.1)", text: "#F7DF1E", border: "rgba(247, 223, 30, 0.3)", logo: "/logos/javascript.svg" },
  "jQuery": { bg: "rgba(7, 108, 184, 0.1)", text: "#0769B8", border: "rgba(7, 108, 184, 0.3)", logo: "/logos/jquery.svg" },
  "HTML5": { bg: "rgba(227, 79, 38, 0.1)", text: "#E34F26", border: "rgba(227, 79, 38, 0.3)", logo: "/logos/html5.svg" },
  "CSS3": { bg: "rgba(21, 114, 182, 0.1)", text: "#1572B6", border: "rgba(21, 114, 182, 0.3)", logo: "/logos/css3.svg" },
  "Tailwind CSS": { bg: "rgba(56, 189, 248, 0.1)", text: "#38BDF8", border: "rgba(56, 189, 248, 0.3)", logo: "/logos/tailwindcss.svg" },
  // Game Dev
  "Unity": { bg: "rgba(255, 255, 255, 0.1)", text: "#FFFFFF", border: "rgba(255, 255, 255, 0.3)", logo: "/logos/unity.svg" },
  "C#": { bg: "rgba(155, 79, 151, 0.1)", text: "#9B4F97", border: "rgba(155, 79, 151, 0.3)", logo: "/logos/csharp.svg" },
  "C++": { bg: "rgba(0, 84, 150, 0.1)", text: "#0088D1", border: "rgba(0, 136, 209, 0.3)", logo: "/logos/cplusplus.svg" },
  "Java": { bg: "rgba(248, 150, 33, 0.1)", text: "#f89821", border: "rgba(248, 150, 33, 0.3)", logo: "/logos/java.svg" },
  "GODOT": { bg: "rgba(77, 153, 222, 0.1)", text: "#4d99de", border: "rgba(77, 153, 222, 0.3)", logo: "/logos/godot.svg" },
  "LUA": { bg: "rgba(0, 0, 128, 0.1)", text: "#88A5E4", border: "rgba(136, 165, 228, 0.3)", logo: "/logos/lua.svg" },
  "Blender": { bg: "rgba(245, 130, 42, 0.1)", text: "#F5822A", border: "rgba(245, 130, 42, 0.3)", logo: "/logos/blender.svg" },
  "ShaderLab": { bg: "rgba(255, 69, 0, 0.1)", text: "#FF4500", border: "rgba(255, 69, 0, 0.3)" },
  // Backend
  "Node.js": { bg: "rgba(83, 158, 67, 0.1)", text: "#539E43", border: "rgba(83, 158, 67, 0.3)", logo: "/logos/nodejs.svg" },
  "PHP (CakePHP)": { bg: "rgba(119, 123, 179, 0.1)", text: "#777BB3", border: "rgba(119, 123, 179, 0.3)", logo: "/logos/php.svg" },
  "Firebase": { bg: "rgba(255, 202, 40, 0.1)", text: "#FFCA28", border: "rgba(255, 202, 40, 0.3)", logo: "/logos/firebase.svg" },
  "MySQL": { bg: "rgba(0, 117, 143, 0.1)", text: "#00758f", border: "rgba(0, 117, 143, 0.3)", logo: "/logos/mysql.svg" },
  "REST APIs": { bg: "rgba(128, 128, 128, 0.1)", text: "#808080", border: "rgba(128, 128, 128, 0.3)" },
  // UI/UX Design
  "Figma": { bg: "rgba(242, 78, 34, 0.1)", text: "#F24E1E", border: "rgba(242, 78, 34, 0.3)", logo: "/logos/figma.svg" },
  "Canva": { bg: "rgba(0, 202, 202, 0.1)", text: "#00CACA", border: "rgba(0, 202, 202, 0.3)" },
  "Adobe Illustrator": { bg: "rgba(255, 152, 0, 0.1)", text: "#FF9800", border: "rgba(255, 152, 0, 0.3)", logo: "/logos/illustrator.svg" },
  "Photoshop": { bg: "rgba(49, 168, 255, 0.1)", text: "#31A8FF", border: "rgba(49, 168, 255, 0.3)", logo: "/logos/photoshop.svg" },
  "User Research": { bg: "rgba(139, 87, 255, 0.1)", text: "#8B57FF", border: "rgba(139, 87, 255, 0.3)" },
  "Psychology-Informed Design": { bg: "rgba(255, 105, 180, 0.1)", text: "#FF69B4", border: "rgba(255, 105, 180, 0.3)" },
  // Music
  "FL Studio": { bg: "rgba(255, 107, 0, 0.1)", text: "#FF6B00", border: "rgba(255, 107, 0, 0.3)", logo: "/logos/flstudio.svg" },
  "FMOD": { bg: "rgba(223, 50, 48, 0.1)", text: "#DF3230", border: "rgba(223, 50, 48, 0.3)" },
  "MIDI": { bg: "rgba(128, 0, 128, 0.1)", text: "#D0A9F5", border: "rgba(208, 169, 245, 0.3)" },
  "Chiptune": { bg: "rgba(64, 224, 208, 0.1)", text: "#40E0D0", border: "rgba(64, 224, 208, 0.3)" },
  "Sound Design": { bg: "rgba(0, 191, 255, 0.1)", text: "#00BFFF", border: "rgba(0, 191, 255, 0.3)" },
  "Songwriting & Composition": { bg: "rgba(255, 215, 0, 0.1)", text: "#FFD700", border: "rgba(255, 215, 0, 0.3)" },
  // Digital Content
  "Adobe Premiere Pro": { bg: "rgba(234, 0, 255, 0.1)", text: "#EA00FF", border: "rgba(234, 0, 255, 0.3)", logo: "/logos/premiere.svg" },
  "Social Marketing": { bg: "rgba(29, 161, 242, 0.1)", text: "#1DA1F2", border: "rgba(29, 161, 242, 0.3)" },
  "Embedded Development (Arduino)": { bg: "rgba(0, 150, 156, 0.1)", text: "#00969C", border: "rgba(0, 150, 156, 0.3)", logo: "/logos/arduino.svg" },

  // Non-branded
  "Construct 2": { bg: "rgba(0,0,0,0.2)", text: "#ffffff", border: "rgba(255,255,255,0.3)" },
  "Editor Scripting": { bg: "rgba(255,255,255,0.1)", text: "#ffffff", border: "rgba(255,255,255,0.3)" },
  "Audio Design": { bg: "rgba(255,255,255,0.1)", text: "#ffffff", border: "rgba(255,255,255,0.3)" },
  "Html": { bg: "rgba(227, 79, 38, 0.1)", text: "#E34F26", border: "rgba(227, 79, 38, 0.3)", logo: "/logos/html5.svg" },

  // Default
  "default": { bg: "hsl(var(--secondary))", text: "hsl(var(--secondary-foreground))", border: "hsl(var(--border))" },
};

export default function SkillBadge({ technology }: SkillBadgeProps) {
  const { bg, text, border, logo } = techColorMap[technology] || techColorMap.default;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors gap-1.5"
      )}
      style={{
        backgroundColor: bg,
        color: text,
        borderColor: border,
        boxShadow: `inset 0 1px 1px 0 rgba(255,255,255,0.1)`,
      }}
    >
      {logo && <Image src={logo} alt={`${technology} logo`} width={12} height={12} className="w-3 h-3" />}
      {technology}
    </div>
  );
}
