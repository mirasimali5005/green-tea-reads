import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  gradient: "matcha" | "blush" | "soft";
}

const FeatureCard = ({ title, description, image, icon: Icon, gradient }: FeatureCardProps) => {
  const gradientClass = `gradient-${gradient}`;
  
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-glow transition-smooth">
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradientClass} opacity-10`}></div>
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative p-8">
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-light/30 group-hover:bg-primary-light transition-smooth">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-2xl font-serif font-semibold mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <Button variant="ghost" className="group-hover:text-primary transition-smooth">
          Explore More →
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
