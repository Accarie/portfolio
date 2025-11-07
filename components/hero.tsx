"use client"

import { Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-pretty">
            Bikesha Cyuzuzo <span className="text-primary">Accarie Davine</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Software Developer & UX/UI Designer passionate about crafting innovative solutions through code and design.
            Specialized in full-stack development, embedded systems, and creating beautiful user experiences.
          </p>
          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Get in Touch
            </a>
           
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <img src="/JBP_9763 (2).jpg" alt="Profile picture" className="w-full h-full object-cover" />
          </div>
          {/* Decorative accent element */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl scale-110"></div>
        </div>
      </div>
    </section>
  )
}
