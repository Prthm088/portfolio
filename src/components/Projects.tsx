import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Brain, Heart, TrendingUp, Code } from "lucide-react";
export const Projects = () => {
  const projects = [{
    title: "AI-Powered Legal Search System",
    description: "AI-powered system using RAG (Retrieval Augmented Generation) to answer legal queries based on user-uploaded files. Top-rated submission at state-level hackathon.",
    technologies: ["Python", "Django", "LlamaIndex", "Replicate API", "RAG"],
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    status: "🏆 Award Winner",
    github: "https://github.com/Prthm088",
    demo: "#",
    featured: true
  }, {
    title: "VetScope – Dog Health Assistant",
    description: "AI chatbot for answering dog health queries with personalized suggestions. Built with Django framework and AI integration for accurate health recommendations.",
    technologies: ["Python", "Django", "AI Integration", "Chatbot"],
    icon: <Heart className="h-8 w-8 text-red-500" />,
    status: "Completed",
    github: "https://github.com/Prthm088",
    demo: "#"
  }, {
    title: "ORB-Based Intraday Signal System",
    description: "FinTech tool providing breakout alerts for 9:15 AM candlestick patterns with volume filtering. Real-time trading signals using SmartAPI integration.",
    technologies: ["Python", "SmartAPI", "WebSockets", "Pandas", "FinTech"],
    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    status: "🚧 In Progress",
    github: "https://github.com/Prthm088",
    demo: "#",
    inProgress: true
  }];
  return <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Showcase of AI-powered applications and web development projects that solve real-world problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => <Card key={index} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer ${project.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''} ${project.inProgress ? 'border-orange-200 bg-gradient-to-br from-orange-50/50 to-transparent' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 bg-background rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-all duration-200 hover:scale-105">
                        {tech}
                      </Badge>)}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" asChild className="flex-1 hover:scale-105 transition-all duration-200">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 hover:scale-105 transition-all duration-200">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Experience</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">Software Developer Intern</h4>
                      <div className="text-primary font-medium mb-2">Auto Appy | Pune, Maharashtra</div>
                      <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Nov 2025 – Feb 2026
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">Tech Stack: PHP, Laravel</div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Worked with Google Sheets and Google Apps Script to build internal automations and create analytical dashboards
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Collaborated with the founder to deploy and manage a Google Workspace extension using Google Cloud Console and SDK
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Managed Apps Script update and redeployment workflows, and assisted in resolving production issues
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">Python Developer Intern</h4>
                      <div className="text-primary font-medium mb-2">Saiket Systems (Remote)</div>
                      <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        June – July 2024
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Web scraping automation using BeautifulSoup
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          API integration and script development
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Implemented libraries like Random for enhanced functionality
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};