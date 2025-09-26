import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                AMAGA SALEM OJIMA
              </span>
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cloud Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Passionate about <span className="text-tech-cloud">cloud infrastructure</span>, 
            <span className="text-tech-web3"> exploring blockchain technologies</span>, and 
            <span className="text-tech-frontend"> creating engaging frontend experiences</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/40">
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-smooth">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-smooth">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-smooth">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;