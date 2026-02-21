
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Django", "SQL", "Pandas", "HTML", "CSS", "GitHub", "VS Code"],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      delay: "delay-100"
    },
    {
      title: "AI & Concepts",
      icon: <Brain className="h-6 w-6" />,
      skills: ["RAG", "LlamaIndex", "API Integration", "Web Scraping", "SmartAPI", "WebSockets"],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      delay: "delay-200"
    },
    {
      title: "Data & Finance",
      icon: <Database className="h-6 w-6" />,
      skills: ["Pandas", "Data Analysis", "FinTech", "Trading Systems", "BeautifulSoup", "Automation"],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      delay: "delay-300"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Teamwork", "Leadership", "Communication", "Adaptability", "Problem Solving"],
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      delay: "delay-400"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 hover:border-primary/20 ${category.delay}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className={`text-xs hover:bg-primary/10 transition-all duration-200 hover:scale-105 cursor-default`}
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
