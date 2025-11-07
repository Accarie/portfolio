"use client"

export default function About() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate software developer and embedded systems enthusiast with strong proficiency in multiple
              programming languages. My expertise spans full-stack development, UI/UX design, and intelligent robotics
              engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments, tackling complex challenges with innovative solutions. My
              philosophy is simple: I am eager to bring my passion for coding and problem-solving to dynamic teams,
              contributing scalable solutions that shape the future of technology.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground">Ngoma District, Rwanda</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Contact</h3>
              <p className="text-muted-foreground">davinecyuzuzo@gmail.com</p>
              <p className="text-muted-foreground">+250 796 411 519</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Languages</h3>
              <p className="text-muted-foreground">English, Kinyarwanda, French</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
