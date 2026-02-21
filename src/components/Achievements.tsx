import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Medal } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Participated in DevThon State-Level Hackathon",
      year: "2025",
      icon: Trophy,
      category: "Competition",
      highlight: true
    },
    {
      title: "Top 10 – Web Page Designing Competition",
      year: "2023",
      icon: Award,
      category: "Design"
    },
    {
      title: "Ministry of MSME's Web Designing E-SDP Program",
      year: "2023",
      icon: Medal,
      category: "Certification"
    },
    {
      title: "Best Senior Award – JDIET",
      year: "2025",
      icon: Trophy,
      category: "Academic"
    },
    {
      title: "College Badminton Captain & Tournament Winner",
      year: "2025",
      icon: Award,
      category: "Sports"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of accomplishments that showcase my dedication to excellence in technology and leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm ${
                    achievement.highlight ? 'border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-card' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl flex-shrink-0 ${
                        achievement.highlight 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            achievement.highlight 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {achievement.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground text-sm leading-tight">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
