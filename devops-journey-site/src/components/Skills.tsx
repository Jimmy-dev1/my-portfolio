import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Globe, Code, Server, Database, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-tech-cloud" />,
      color: "tech-cloud",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD"]
    },
    {
      title: "Web3 & Blockchain (Learning)",
      icon: <Globe className="h-8 w-8 text-tech-web3" />,
      color: "tech-web3", 
      skills: ["Blockchain Fundamentals", "Smart Contract Concepts", "Web3 Basics", "Cryptocurrency", "DeFi Concepts"]
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-tech-frontend" />,
      color: "tech-frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3"]
    },
    {
      title: "Cloud Platforms",
      icon: <Server className="h-6 w-6" />,
      color: "primary",
      skills: ["Amazon Web Services", "Oracle Cloud", "Google Cloud Platform", "Cloud Architecture", "Infrastructure"]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="h-6 w-6" />,
      color: "primary",
      skills: ["Git", "VS Code", "Linux", "Docker Basics", "CI/CD Concepts", "Monitoring"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning modern cloud technologies, blockchain innovation, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/20">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/40 hover:bg-secondary/60 transition-colors"
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
    </section>
  );
};

export default Skills;