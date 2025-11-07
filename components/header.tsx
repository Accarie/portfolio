"use client"

import { Moon, Sun, Download } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/BIKESHA CYUZUZO Accarie Davine_CV.pdf"
    link.download = "BIKESHA CYUZUZO Accarie Davine_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Davine
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Download CV</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
