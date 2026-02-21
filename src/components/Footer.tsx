
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">PM</span>
                </div>
                <div className="text-xl font-bold text-foreground">
                  Pratham Mohod
                </div>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Full Stack Python Developer & AI Enthusiast creating innovative solutions 
                for the modern web.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Skills</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <a href="mailto:prathammohod088@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                  prathammohod088@gmail.com
                </a>
                <a href="tel:+917620397738" className="block text-muted-foreground hover:text-primary transition-colors">
                  +91 7620397738
                </a>
                <div className="text-muted-foreground">
                  Yavatmal, Maharashtra
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Pratham Mohod. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Prthm088" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/pratham-mohod-80136b230" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:prathammohod088@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+917620397738">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
