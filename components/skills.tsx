"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C & C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "Flutter", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Spring Boot","NestJS", "Django", "FastAPI", "SQL", "REST APIs"],
  },
  {
    title: "Specializations",
    skills: ["UI/UX Design", "Embedded Systems", "Robotics Engineering", "Cybersecurity"],
  },
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
