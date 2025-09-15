import { Heart, Users, Star } from "lucide-react";

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const services = [
    {
      icon: Heart,
      title: "Bespoke Bridal Gown Design",
      description: "One-on-one consultations to create your dream gown. From initial sketches to final fittings, every detail is tailored to your vision and body.",
      features: ["Personal design consultation", "Custom measurements", "Premium fabrics", "Multiple fittings"]
    },
    {
      icon: Users,
      title: "Bridesmaids & Bridal Party Wear",
      description: "Coordinated designs that complement your bridal look while ensuring each member of your party feels beautiful and confident.",
      features: ["Coordinated styling", "Group fittings", "Color matching", "Mix & match options"]
    },
    {
      icon: Star,
      title: "Limited Edition Ready-to-Wear",
      description: "Exclusive bridal pieces available in our boutique. Each design is limited to ensure your gown remains uniquely special.",
      features: ["Limited quantities", "Luxury fabrics", "Ready for alterations", "Seasonal collections"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="font-display font-light italic text-lg sm:text-xl text-black/50 max-w-2xl mx-auto px-4">
            From bespoke creations to ready-to-wear elegance, we offer comprehensive bridal solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-6 sm:p-8 rounded-2xl border border-border hover-luxury glow-romantic animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-16 h-16 bg-[#F4BBC9] rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-xl font-normal uppercase text-foreground mb-3">
                  {service.title}
                </h3>
              </div>

              <p className="font-display font-light text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center body text-sm text-muted-foreground font-thin">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <button 
                onClick={scrollToContact}
                className="font-body font-medium text-gold hover:scale-105 transition-colors duration-300">
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;