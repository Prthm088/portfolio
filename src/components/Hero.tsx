import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const downloadResume = () => {
    window.open("https://1drv.ms/b/c/b05bed732013e407/EQfkEyBz7VsggLAglgIAAAABZJOr_gTN2KR2bcSsNQsx9Q", "_blank");
  };

  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
    {/* Modern Grid Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
    </div>

    {/* Enhanced Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-secondary/5 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 animate-bounce px-4 py-2 text-sm font-semibold">
                ✨ AVAILABLE FOR WORK
              </Badge>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-primary bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                    Pratham Mohod
                  </span>
                </h1>
                <h2 className="text-xl md:text-3xl text-muted-foreground font-medium leading-relaxed">
                  Full Stack Python Developer &{" "}
                  <span className="text-primary font-semibold">AI Enthusiast</span>
                </h2>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Creating <span className="text-primary font-semibold">AI-powered tools</span> and efficient web applications.
              Computer Science graduate passionate about building scalable solutions
              that merge web development with artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl font-semibold"
                onClick={scrollToContact}
              >
                <Mail className="mr-3 h-6 w-6" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 rounded-xl font-semibold"
                onClick={downloadResume}
              >
                <Download className="mr-3 h-6 w-6" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-6">
              <Button variant="ghost" size="icon" className="h-14 w-14 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-xl" asChild>
                <a href="https://github.com/Prthm088" target="_blank" rel="noopener noreferrer">
                  <Github className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-xl" asChild>
                <a href="https://linkedin.com/in/pratham-mohod-80136b230" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-xl" asChild>
                <a href="mailto:prathammohod088@gmail.com">
                  <Mail className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-xl" asChild>
                <a href="tel:+917620397738">
                  <Phone className="h-7 w-7" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section with Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-border/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>

              <div className="text-center space-y-8 relative z-10">
                {/* Profile Picture using Avatar component with enhanced styling */}
                <div className="relative mx-auto w-56 h-56 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary rounded-full blur-md opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                  <Avatar className="relative w-full h-full border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
                    <AvatarImage
                      src="/lovable-uploads/9267b84e-22e1-411a-99bb-164c504597b7.png"
                      alt="Pratham Mohod"
                      className="object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', e);
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully');
                      }}
                    />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      PM
                    </AvatarFallback>
                  </Avatar>
                  {/* Floating status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background shadow-lg animate-pulse">

                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-foreground">Pratham Mohod</h3>
                  <p className="text-muted-foreground flex items-center justify-center gap-3 text-lg">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></span>
                    Pune, Maharashtra
                  </p>
                </div>

                <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 backdrop-blur-sm border border-border/30">
                  <div className="text-sm text-muted-foreground mb-3 font-medium">Recent work includes</div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors px-3 py-1 rounded-full">AI Legal Search</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors px-3 py-1 rounded-full">VetScope</Badge>
                    <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors px-3 py-1 rounded-full">Trading Signals</Badge>
                  </div>
                </div>

                <div className="text-primary font-bold bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl py-4 px-6 border border-primary/20 text-lg">
                  🎓 B.E. Computer Science • Graduated in 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
            <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce hover:bg-transparent hover:scale-110 transition-all duration-300 rounded-full p-3">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
