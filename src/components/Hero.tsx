import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, Coffee } from "lucide-react";
import heroImage from "@/assets/hero-matcha.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cozy reading scene with matcha and headphones" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6 animate-in fade-in duration-700">
          <Coffee className="w-8 h-8 text-primary" />
          <BookOpen className="w-8 h-8 text-primary" />
          <Headphones className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance animate-in fade-in duration-700 delay-100">
          Matcha Moments
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-in fade-in duration-700 delay-200">
          Your cozy corner for books, beats, and beautiful brews
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700 delay-300">
          <Button variant="hero" size="lg" className="text-lg">
            Get Started
          </Button>
          <Button variant="soft" size="lg" className="text-lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
