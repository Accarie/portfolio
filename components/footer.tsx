"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Davine Cyuzuzo</h3>
            <p className="text-sm text-muted-foreground">
              Software Developer & UX/UI Designer creating innovative solutions through code and design.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:davinecyuzuzo@gmail.com"
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a href="https://github.com/Accarie" className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Davine Cyuzuzo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
