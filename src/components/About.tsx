import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Trophy } from "lucide-react";
export const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] bg-[length:2rem_2rem] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-8"></div>
            
            {/* Main Description Text */}
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science graduate specializing in full-stack development, 
                particularly in Python and Django. I enjoy building tools that merge web development 
                with AI to solve real-world problems.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I believe in continuous learning and have actively participated in hackathons and 
                competitions to sharpen my skills. My work focuses on creating AI-integrated, 
                scalable applications with a deep interest in financial technology and legal tech solutions.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              <Badge variant="outline" className="text-primary border-primary/30 hover:bg-primary/10 transition-colors px-4 py-2 text-sm font-medium">Python Expert</Badge>
              <Badge variant="outline" className="text-primary border-primary/30 hover:bg-primary/10 transition-colors px-4 py-2 text-sm font-medium">Django Developer</Badge>
              <Badge variant="outline" className="text-primary border-primary/30 hover:bg-primary/10 transition-colors px-4 py-2 text-sm font-medium">AI Integration</Badge>
              <Badge variant="outline" className="text-primary border-primary/30 hover:bg-primary/10 transition-colors px-4 py-2 text-sm font-medium">FinTech</Badge>
            </div>
          </div>
          
          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                  
                  <div className="space-y-4 text-left">
                    <div className="border-l-2 border-primary/30 pl-4 py-2 bg-primary/5 rounded-r-lg">
                      <div className="font-medium text-foreground text-sm">B.E. Computer Science</div>
                      <div className="text-xs text-muted-foreground">JDIET, Yavatmal</div>
                      <div className="text-xs text-primary font-medium">Graduated June 2025</div>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4 py-2">
                      <div className="font-medium text-foreground text-sm">HSC (85.17%)</div>
                      <div className="text-xs text-muted-foreground">Shivaji Science College, Nagpur • 2021</div>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4 py-2">
                      <div className="font-medium text-foreground text-sm">SSC (85.8%)</div>
                      <div className="text-xs text-muted-foreground">Yavatmal Public School • 2019</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Personal Info</h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="font-medium text-foreground text-sm">Location</div>
                      <div className="text-xs text-muted-foreground">Pune, Maharashtra</div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-foreground text-sm">Status</div>
                      <div className="text-xs text-green-600 font-medium">Available for Work</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="font-medium text-foreground text-sm">Experience</div>
                      <div className="text-xs text-muted-foreground">2 Internships</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="font-medium text-foreground text-sm">Focus</div>
                      <div className="text-xs text-muted-foreground">AI & Web Dev</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Latest Achievement Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-secondary bg-gradient-to-br from-secondary/5 to-card backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Latest Achievement</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-4 border border-secondary/20">
                      <div className="font-semibold text-secondary text-sm">DevThon State-Level Hackathon</div>
                      <div className="text-xs text-muted-foreground">Top Submission • 2025</div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>• Top 10 – Web Page Designing (2023)</div>
                      <div>• Best Senior Award – JDIET (2025)</div>
                      <div>• Badminton Captain & Winner (2025)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};