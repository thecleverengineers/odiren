import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Senjum Kikon",
      text: "The dress wasn't just beautiful, it was everything I dreamed of. Odirenla understood my vision perfectly and brought it to life with such attention to detail."
    },
    {
      name: "Rakchidome",
      text: "Odi, your love and attention to detail shone through in every stitch. I felt like a princess on my wedding day, and the gown was absolutely perfect."
    },
    {
      name: "Kaheli Chophy",
      text: "Timeless and romantic. I received endless compliments throughout the day. The craftsmanship was exceptional, and the fit was absolutely flawless."
    },
    {
      name: "Chubayula",
      text: "Fell in love at first sight! The gown was 'the one' - exactly what I had always envisioned for my special day. Thank you for making my dreams come true."
    },
    {
      name: "Lothunglo Ezung",
      text: "A breathtaking masterpiece, a vision out of a fairytale. The entire experience was magical, from consultation to the final fitting."
    },
    {
      name: "Muyoniu Meyo",
      text: "This wasn't just a dress, it was a work of art. Every detail was thoughtfully crafted, and I felt absolutely radiant on my wedding day."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalTime = 2000; // 3 seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (isPaused) return;

      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, intervalTime);
    };

    startTimer();

    // Handle window resize to restart timer if switching between mobile and desktop
    const handleResize = () => startTimer();
    window.addEventListener("resize", handleResize);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPaused, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal text-foreground mb-4">
            Real Brides, Real Stories
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="font-display font-light text-lg sm:text-xl text-black/50 italic max-w-2xl mx-auto px-4">
            Hear from the beautiful brides who trusted us with their special day
          </p>
        </div>

        {/* Mobile Carousel - visible only on mobile */}
        <div className="block sm:hidden w-full overflow-hidden px-2">
          <Carousel className="w-full mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className={index === currentIndex ? "block" : "hidden"}>
                  <div className="bg-card p-6 rounded-3xl shadow-luxury glow-romantic">
                    <Quote className="w-8 h-8 text-primary mb-4 mx-auto" />
                    
                    <div className="text-center">
                      <p className="font-display font-light text-sm text-black/50 mb-6 leading-relaxed italic px-2">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex flex-col items-center space-y-1">
                        <h4 className="font-display text-sm font-normal text-primary">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Desktop Auto-rotating Carousel - hidden on mobile */}
        <div 
          className="hidden sm:block max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative bg-card p-6 sm:p-8 lg:p-12 rounded-3xl shadow-luxury glow-romantic animate-slide-up">
            <Quote className="w-8 sm:w-12 h-8 sm:h-12 text-[#F4BBC9] mb-4 sm:mb-6 mx-auto" />
            
            <div className="text-center px-12">
              <p className="font-display font-light text-lg sm:text-xl text-black/50 mb-6 sm:mb-8 leading-relaxed italic px-2">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                <h4 className="font-display text-xl font-normal text-[#F4BBC9]">
                  {testimonials[currentIndex].name}
                </h4>
              </div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-gold transition-colors duration-300"
            >
              <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-gold transition-colors duration-300"
            >
              <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;