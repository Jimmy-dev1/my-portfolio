import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Journey = () => {
  const journeySteps = [
    {
      year: "2025",
      title: "Cloud Computing Enthusiast",
      company: "Colab Innovation Campus",
      location: "Kaduna, Nigeria",
      description: "Started my journey in cloud computing and technology, gaining foundational knowledge and pursuing industry certifications.",
      achievements: [
        "Earned AWS Cloud Practitioner certification",
        "Completed Oracle Cloud Infrastructure certifications", 
        "Currently pursuing Google Cloud Associate Engineer certification"
      ],
      skills: ["AWS", "Oracle Cloud", "Cloud Fundamentals", "Frontend Development"]
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", year: "2025", icon: <Award className="h-4 w-4" /> },
    { name: "Oracle Cloud Infrastructure AI Foundation Associate", year: "2025", icon: <Award className="h-4 w-4" /> },
    { name: "OCI Foundation Associate", year: "2025", icon: <Award className="h-4 w-4" /> },
    { name: "Google Cloud Associate Engineer (In Progress)", year: "2025", icon: <BookOpen className="h-4 w-4" /> }
  ];

  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From frontend development to cloud architecture, tracking my evolution in the tech landscape
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {journeySteps.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    
                    <Card className="ml-16 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <CardDescription className="text-primary font-medium">
                              {step.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-end text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {step.year}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {step.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {step.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {step.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{cert.name}</div>
                      <div className="text-xs text-muted-foreground">{cert.year}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Months in Cloud</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-cloud">3</div>
                  <div className="text-sm text-muted-foreground">Certifications Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-web3">1</div>
                  <div className="text-sm text-muted-foreground">Organization</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;