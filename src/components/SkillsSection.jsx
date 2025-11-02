import { useState } from "react";
import { cn } from "@/lib/utils"
import { SiCplusplus, SiPython, SiPhp, SiUnrealengine, SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiAlpinedotjs, SiTailwindcss, SiLaravel, SiNodedotjs, SiMongodb, SiFirebase, SiMysql, SiGit, SiDocker, SiGooglecloud, SiQt, SiJenkins, SiCmake, SiUnity } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const skills = [
    // Languages
    { name: "C++", level: 90, category: "languages", icon: SiCplusplus },
    { name: "C#", level: 85, category: "languages", icon: TbBrandCSharp },
    { name: "Java", level: 75, category: "languages", icon: FaJava },
    { name: "PHP", level: 70, category: "languages", icon: SiPhp },
    { name: "Python", level: 60, category: "languages", icon: SiPython },

    // Frontend
    { name: "HTML/CSS", level: 80, category: "frontend", icon: SiHtml5 },
    { name: "JavaScript", level: 80, category: "frontend", icon: SiJavascript },
    { name: "React", level: 80, category: "frontend", icon: SiReact },
    { name: "Next.JS", level: 70, category: "frontend", icon: SiNextdotjs },
    { name: "Alpine.JS", level: 80, category: "frontend", icon: SiAlpinedotjs },
    { name: "Tailwind CSS", level: 75, category: "frontend", icon: SiTailwindcss },

    // Backend
    { name: "Laravel", level: 90, category: "backend", icon: SiLaravel },
    { name: "Node.js", level: 60, category: "backend", icon: SiNodedotjs },
    { name: "MongoDB", level: 70, category: "backend", icon: SiMongodb },
    { name: "Firebase", level: 60, category: "backend", icon: SiFirebase },
    { name: "SQL", level: 75, category: "backend", icon: SiMysql },

    // Tools
    { name: "Unreal Engine", level: 95, category: "tools", icon: SiUnrealengine },
    { name: "Unity", level: 80, category: "tools", icon: SiUnity },
    { name: "Git", level: 90, category: "tools", icon: SiGit },
    { name: "Docker", level: 70, category: "tools", icon: SiDocker },
    { name: "Azure Cloud", level: 80, category: "tools", icon: VscAzure },
    { name: "Google Cloud", level: 90, category: "tools", icon: SiGooglecloud },
    { name: "Qt", level: 75, category: "tools", icon: SiQt },
    { name: "Jenkins", level: 70, category: "tools", icon: SiJenkins },
    { name: "CMake", level: 70, category: "tools", icon: SiCmake },
];

export default skills;


const categories = ["all", "languages", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg flex items-center gap-3">
                                {skill.icon && <skill.icon className="text-2xl text-primary shrink-0" />}
                                <span>{skill.name}</span>
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                            />
                        </div>
                        <div className="text-right mt-1 ">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section >
};