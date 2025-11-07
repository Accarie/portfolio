"use client"

const projects = [
  {
    title: "StaffTrack Project",
    description:
      "A Spring Boot backend employee tracking system with manager, admin and employee portals that tracks staff status and calculates salaries based on revenue.",
    tech: ["Spring Boot", "Java", "Postgres"],
    category: "Backend",
  },
  {
    title: "ParkTrack Project",
    description:
      "A Spring Boot backend system to track vehicle ownership history, plate number assignments, and ownership transfers in Rwanda.",
    tech: ["Spring Boot", "Java", "Postgres"],
    category: "Backend",
  },
  {
    title: "SpendWise",
    description:
      "A React Native mobile app that tracks individual expenses across categories, showing itemized costs and real-time spending updates.",
    tech: ["React Native", "JavaScript", "Mobile"],
    category: "Full-Stack",
  },
  {
    title: "SmartPark Project",
    description:
      "A parking system with admin and attendant roles that handles booking approvals, payment processing, and generates tickets and reports.",
    tech: ["React", "Node.js", "Postgres"],
    category: "Full-Stack",
  },
  {
    title: "EzyPharma Project",
    description:
      "A centralized Healthcare ERP app enabling real-time referrals, pharmacy coordination, and voice-based interactions using NLP.",
    tech: ["UI/UX Design", "Figma", "Healthcare"],
    category: "Design",
  },
  {
    title: "Efiche Project",
    description:
      "A health app that bridges patients and doctors in real time, offering online consulations and appointments, martenity care and nearby pharmacy access",
    tech: ["Figma", "Flutter", "Healthcare"],
    category: "Design & Frontend",
  },
  {
    title: "AutomatedGate Project",
    description:
      "An intelligent robotics-based automated parking management system that tracks vehicle entry, processes payments, and controls car exit.",
    tech: ["Robotics", "C++", "IoT"],
    category: "Robotics",
  },
]

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12" id="projects">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group p-6 bg-card border border-border rounded-xl hover:shadow-xl transition-all hover:border-primary/50"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <span className="text-xs font-semibold text-primary/70 bg-primary/10 px-2 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
