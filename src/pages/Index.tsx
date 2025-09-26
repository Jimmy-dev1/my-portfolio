import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Your Name. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
