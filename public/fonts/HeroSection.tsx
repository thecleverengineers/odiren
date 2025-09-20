import heroImage from "@/assets/hero.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="relative min-h-[70vh] sm:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant bridal gown in a romantic setting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Solid overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mt-4 px-6 sm:px-8 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl uppercase md:text-6xl lg:text-6xl font-light text-[#f3f0e6] mt-[50px]  leading-tight">
          Where Elegance
          <span className="block text-gold mt-4">Meets Emotion</span>
        </h1>

        <p className="relative bottom-1 sm:bottom-4 para text-[32px] sm:text-[60px] text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          <span className="text-[20px] sm:text-[50px] px-1">H</span>andcrafted gowns for the bride who dreams in detail
        </p>

        <button
          onClick={scrollToContact}
          aria-label="Book a consultation for bridal gowns"
          className="bg-transparent text-white hover:text-white p-2 sm:p-3 rounded-lg font-semibold text-xs md:text-lg  transition-all duration-500 hover:shadow-luxury hover:scale-105"
        >
          Book a Consultation
        </button>

        {/* Decorative Elements - Hidden on mobile */}
        <div
          className="hidden sm:block absolute top-1/4 left-1/4 w-3 h-3 bg-gold/50 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent/50 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Scroll Indicator */}
      <div onClick={scrollToAbout} className="cursor-pointer absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <ArrowDown className="w-4 h-4 sm:w-6 sm:h-6 mt-2 sm:mt-3 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;