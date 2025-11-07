"use client"

const education = [
  {
    school: "Rwanda Coding Academy",
    degree: "Advanced Level in Software Development and Embedded Systems",
    location: "Nyabihu, Rwanda",
    date: "2022-2025",
  },
  {
    school: "Fawe Girl's School",
    degree: "Ordinary Level",
    location: "Kigali City, Rwanda",
    date: "2019-2022",
  },
]

const certificates = [
  {
    name: "iChoose-iLead Program",
    issuer: "Rwanda Coding Academy",
    date: "2023-2024",
  },
  {
    name: "RCA Hackathon Certificate",
    issuer: "Rwanda Coding Academy",
    date: "2023-2024",
  },
  {
    name: "Ideation and Prototyping Workshop",
    issuer: "GIZ Rwanda",
    date: "August 2024",
  },
  {
    name: "eFiche Internship Completion Certificate",
    issuer: "eFiche Company",
    date: "August 2025 - October 2025",
  },
]

export default function Education() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-4 bg-card border border-border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">{edu.school}</h4>
                  <p className="text-sm text-primary font-semibold mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  <p className="text-xs text-muted-foreground mt-2">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert, idx) => (
                <div key={idx} className="p-4 bg-card border border-border rounded-lg">
                  <h4 className="font-bold mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
