"use client"

const experiences = [
  {
    title: "eFiche Internship",
    description: "Hands-on project development, Collaboration & teamwork, Problem-solving & debugging",
    location: "Kigali - Rwanda",
    date: "August 2024 - October 2025",
  },
  {
    title: "Ideation & Prototyping Workshop in Rwanda and GIZ",
    description: "Gained expertise in Critical Thinking, Problem-solving, Teamwork, and idea development",
    location: "Nyabihu-Western Province",
    date: "August 2024",
  },
  {
    title: "RCA Second Hackathon Rwanda Coding Academy",
    description: "Problem-solving, Teamwork, Communication, Organization, Critical Thinking",
    location: "Nyabihu-Western Province",
    date: "2023-2024",
  },
  {
    title: "Korean IT Class Camp",
    description: "Critical Thinking, Problem-solving, Teamwork and Time Management",
    location: "Nyabihu-Western Province",
    date: "September 2023",
  },
]

export default function Experience() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
