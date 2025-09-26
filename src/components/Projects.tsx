import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Cloud, Globe, Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projectCategories = {
    cloud: {
      icon: <Cloud className="h-4 w-4" />,
      projects: [
        {
          title: "Multi-Cloud Infrastructure Automation",
          description: "Terraform-based infrastructure as code for deploying scalable applications across AWS and GCP with automatic failover and monitoring.",
          tech: ["Terraform", "AWS", "GCP", "Kubernetes", "Prometheus"],
          github: "#",
          demo: "#",
          status: "Production"
        },
        {
          title: "CI/CD Pipeline Orchestration",
          description: "Complete DevOps pipeline with automated testing, security scanning, and deployment to multiple environments.",
          tech: ["GitLab CI", "Docker", "SonarQube", "Helm", "ArgoCD"],
          github: "#",
          demo: "#",
          status: "Active"
        },
        {
          title: "Serverless Microservices Platform",
          description: "Event-driven serverless architecture with automatic scaling and cost optimization across cloud providers.",
          tech: ["AWS Lambda", "API Gateway", "EventBridge", "DynamoDB"],
          github: "#",
          demo: "#",
          status: "Beta"
        }
      ]
    },
    web3: {
      icon: <Globe className="h-4 w-4" />,
      projects: [
        {
          title: "DeFi Yield Farming Protocol",
          description: "Smart contract system for automated yield farming with risk assessment and portfolio optimization.",
          tech: ["Solidity", "Hardhat", "Web3.js", "OpenZeppelin", "Chainlink"],
          github: "#",
          demo: "#",
          status: "Testnet"
        },
        {
          title: "NFT Marketplace & Minting Platform",
          description: "Full-featured NFT marketplace with lazy minting, royalty management, and cross-chain compatibility.",
          tech: ["Ethereum", "IPFS", "React", "Moralis", "MetaMask"],
          github: "#",
          demo: "#",
          status: "Mainnet"
        },
        {
          title: "DAO Governance Framework",
          description: "Decentralized governance system with proposal voting, treasury management, and reputation tracking.",
          tech: ["Solidity", "Snapshot", "Aragon", "The Graph", "IPFS"],
          github: "#",
          demo: "#",
          status: "Development"
        }
      ]
    },
    frontend: {
      icon: <Code className="h-4 w-4" />,
      projects: [
        {
          title: "Real-time Analytics Dashboard",
          description: "Interactive dashboard for monitoring cloud infrastructure metrics with real-time updates and custom alerts.",
          tech: ["React", "TypeScript", "D3.js", "Socket.io", "Tailwind"],
          github: "#",
          demo: "#",
          status: "Production"
        },
        {
          title: "Progressive Web App Suite",
          description: "Offline-first PWA with background sync, push notifications, and seamless mobile experience.",
          tech: ["Next.js", "PWA", "IndexedDB", "Service Workers", "Workbox"],
          github: "#",
          demo: "#",
          status: "Production"
        },
        {
          title: "Component Library & Design System",
          description: "Reusable component library with comprehensive documentation and automated testing.",
          tech: ["React", "Storybook", "Jest", "Rollup", "Chromatic"],
          github: "#",
          demo: "#",
          status: "Active"
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
      case "Mainnet":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Active":
      case "Beta":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Testnet":
      case "Development":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world implementations across cloud infrastructure, blockchain applications, and modern web development
          </p>
        </div>

        <Tabs defaultValue="cloud" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="cloud" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              Cloud & DevOps
            </TabsTrigger>
            <TabsTrigger value="web3" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Web3 & Blockchain
            </TabsTrigger>
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Frontend & Web
            </TabsTrigger>
          </TabsList>

          {Object.entries(projectCategories).map(([category, data]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.projects.map((project, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge className={`ml-2 ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                          <a href={project.github}>
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-2" asChild>
                          <a href={project.demo}>
                            <ExternalLink className="h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;