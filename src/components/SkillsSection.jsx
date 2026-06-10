import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "Socket.io", level: 80, category: "backend" },

  // Programming
  { name: "Python", level: 95, category: "programming" },
  { name: "Java", level: 80, category: "programming" },
  { name: "C++", level: 75, category: "programming" },
  { name: "SQL", level: 90, category: "programming" },
  { name: "DBMS", level: 85, category: "programming" },
  { name: "Operating Systems", level: 80, category: "programming" },
  { name: "Computer Networks", level: 80, category: "programming" },
  { name: "OOPs", level: 85, category: "programming" },
  { name: "Data Structures & Algorithms", level: 85, category: "programming" },

  // Data Analytics & AI
  { name: "NumPy", level: 90, category: "data" },
  { name: "Pandas", level: 90, category: "data" },
  { name: "Matplotlib", level: 85, category: "data" },
  { name: "Seaborn", level: 85, category: "data" },
  { name: "Scikit-Learn", level: 80, category: "data" },
  { name: "Machine Learning", level: 80, category: "data" },
  { name: "Generative AI", level: 85, category: "data" },
  { name: "Tableau", level: 80, category: "data" },
  { name: "Data Analytics", level: 90, category: "data" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Oracle Cloud", level: 75, category: "tools" },
  { name: "OpenCV", level: 80, category: "tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "programming",
  "data",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills & Expertise</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-sm border"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};