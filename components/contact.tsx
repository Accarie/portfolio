"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="contact">
      <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <a
          href="mailto:davinecyuzuzo@gmail.com"
          className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all group"
        >
          <Mail className="text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold mb-2">Email</h3>
          <p className="text-muted-foreground">davinecyuzuzo@gmail.com</p>
        </a>
        <a
          href="tel:+250796411519"
          className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all group"
        >
          <Phone className="text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold mb-2">Phone</h3>
          <p className="text-muted-foreground">+250 796 411 519</p>
        </a>
        <div className="p-6 bg-card border border-border rounded-xl">
          <MapPin className="text-primary mb-3" size={32} />
          <h3 className="font-bold mb-2">Location</h3>
          <p className="text-muted-foreground">Ngoma District, Rwanda</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Let's connect and create something
          amazing together!
        </p>
        <a
          href="mailto:davinecyuzuzo@gmail.com"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Send me a message
        </a>
      </div>
    </section>
  )
}
