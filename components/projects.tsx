"use client"

const projects = [
  {
    title: "EzyPharma Project",
    description:
      "A centralized Healthcare ERP app enabling real-time referrals, pharmacy coordination, and voice-based interactions using NLP.",
    tech: ["UI/UX Design", "Figma", "Healthcare"],
    category: "Design",
    links: { figma: "https://www.figma.com/proto/hWl7lcstNLMtWsrd2QpmAF/Ezypharma?node-id=0-1&p=f&t=l3feaWpHLvKw095e-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A10878" },
  },
   {
    title: "Umuhamya Project",
    description:
      "An intelligent chatbot offering answers and guidance on child protection,nutrition, ECD, GBV, and gender equality, while linking users to relevant resources and support services in RISA Organization.",
    tech: ["UI/UX Design", "Figma", "Chatbot"],
    category: "Design",
    links: { figma: "https://www.figma.com/proto/kfTO04mfSyQHPkbOWxsZS0/Umuhamya-Chatbot-for-education-and-awareness?node-id=272-4351&p=f&t=8G98eCEubDzQqA6g-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=272%3A4351&show-proto-sidebar=1" },
  },
   {
    title: "Scroll Project",
    description:
      "A mobile app which limits daily social media usage by locking access after a set time is reached. It then offers fun, brain-training activities to boost focus and productivity",
    tech: ["UI/UX Design", "Figma", "social-media-app"],
    category: "Design",
    links: { figma: "https://www.figma.com/proto/jsLj3dfSwuHpL5BKopzUqJ/Scroll?node-id=273-1155&p=f&t=wukys5sBsAwZNYyq-0&scaling=scale-down&content-scaling=fixed&page-id=273%3A1155" },
  },
  {
    title: "CreditJambo Project",
    description:
      "Built a fintech agent wallet and merchant management prototype with KYC login, wallet tracking, transaction approvals, customer verification, and commission analytics.",
    tech: ["UI/UX Design", "Figma", "Fintech-app"],
    category: "Design",
    links: { figma: "https://www.figma.com/proto/l9vQTBwHdVhqMnfh1HYdWR/CreditJamboLtd?node-id=51-1223&p=f&t=3AOBC83OLn9EKCHs-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A1223" },
  },
  {
    title: "StaffTrack Project",
    description:
      "A Spring Boot backend employee tracking system with manager, admin and employee portals that tracks staff status and calculates salaries based on revenue.",
    tech: ["Spring Boot", "Java", "Postgres"],
    category: "Backend",
    links: { github: "https://github.com/Accarie/StaffTrack.git" },
  },
  {
    title: "ParkTrack Project",
    description:
      "A Spring Boot backend system to track vehicle ownership history, plate number assignments, and ownership transfers in Rwanda.",
    tech: ["Spring Boot", "Java", "Postgres"],
    category: "Backend",
    links: { github: "https://github.com/Accarie/ParkTrack.git" },
  },
  {
    title: "SpendWise",
    description:
      "A React Native mobile app that tracks individual expenses across categories, showing itemized costs and real-time spending updates.",
    tech: ["React Native", "JavaScript", "Mobile"],
    category: "Full-Stack",
    links: { github: "https://github.com/Accarie/SpendWise.git" },
  },
  {
    title: "SmartPark Project",
    description:
      "A parking system with admin and attendant roles that handles booking approvals, payment processing, and generates tickets and reports.",
    tech: ["React", "Node.js", "Postgres"],
    category: "Full-Stack",
    links: { github: "https://github.com/Accarie/SmartPark.git" },
  },
  {
    title: "Efiche Project",
    description:
      "A health app that bridges patients and doctors in real time, offering online consulations and appointments, martenity care and nearby pharmacy access",
    tech: ["Figma", "Flutter", "Healthcare"],
    category: "Design & Frontend",
    links: { figma: "https://figma.com/file/yourlinkhere" },
  },
  {
    title: "CareTrack-app Project",
    description:
      "A full-stack healthcare management system with patient tracking, program management, medication dispensing, and comprehensive reporting",
    tech: ["Next.js", "NestJS", "Postgres"],
    category: "Full-Stack",
    links: { github: "https://github.com/Accarie/careTracker-app.git" },
  },
  {
    title: "AutomatedGate Project",
    description:
      "An intelligent robotics-based automated parking management system that tracks vehicle entry, processes payments, and controls car exit.",
    tech: ["Robotics", "C++", "IoT"],
    category: "Robotics",
    links: { github: "https://github.com/Accarie/Automated-gate.git" },
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
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border/50">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {project.links?.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.402 0A6.403 6.403 0 0 1 21.804 6.402 6.403 6.403 0 0 1 15.402 12.804H12V6.402A6.403 6.403 0 0 1 18.402 0h-2.999z" />
                    <path d="M12 0A6.402 6.402 0 0 0 5.598 6.402 6.402 6.402 0 0 0 12 12.804V6.402A6.402 6.402 0 0 1 18.402 0H12z" />
                    <path d="M12 6.402A6.402 6.402 0 1 0 5.598 12.804 6.402 6.402 0 0 0 12 6.402z" />
                    <path d="M5.598 6.402A6.402 6.402 0 1 1 0 12.804a6.402 6.402 0 0 1 5.598-6.402z" />
                    <path d="M5.598 12.804A6.402 6.402 0 1 0 12 19.206a6.402 6.402 0 0 0-6.402-6.402z" />
                  </svg>
                  View on Figma
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
