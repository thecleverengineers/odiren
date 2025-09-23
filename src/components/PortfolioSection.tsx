import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Chantrelle from "@/assets/odiren (1).jpg";
import Adorée from "@/assets/odiren (2).jpg";
import Élysia from "@/assets/odiren (3).jpg";
import Marisette from "@/assets/odiren (4).jpg";
import Lustre from "@/assets/odiren (5).jpg";
import Eterna from "@/assets/odiren (6).jpg";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Chantrelle",
      description: "lace and tulle entwined in a symphony of grandeur ~Voluminous Tulle & Lace Ball Gown.",
      category: "Chantrelle",
      image: Chantrelle,
      alt: "lace and tulle entwined in a symphony of grandeur ~Voluminous Tulle & Lace Ball Gown."
    },
    {
      id: 2,
      title: "Adorée",
      description: "Beloved in every detail, timeless in every glance. ~Sweetheart neck Gown with Pearls, Crystals & voluminous Detachable Train.",
      category: "Adorée",
      image: Adorée,
      alt: "Beloved in every detail, timeless in every glance. ~Sweetheart neck Gown with Pearls, Crystals & voluminous Detachable Train."
    },
    {
      id: 3,
      title: "Élysia",
      description: "Heavenly blooms sculpted in every detail, transforming elegance with every step ~fully embellished silhouette with appliqués & detachable Train.",
      category: "Élysia",
      image: Élysia,
      alt: "Heavenly blooms sculpted in every detail, transforming elegance with every step ~fully embellished silhouette with appliqués & detachable Train."
    },
    {
      id: 4,
      title: "Marisette",
      description: "Whispers of Chantilly lace, refined in quiet romance. ~Softly draped sheath with light Chantilly lace gracing the sleeves and neckline.",
      category: "Marisette",
      image: Marisette,
      alt: "Whispers of Chantilly lace, refined in quiet romance. ~Softly draped sheath with light Chantilly lace gracing the sleeves and neckline."
    },
    {
      id: 5,
      title: "Lustre Bloom",
      description: "Where satin radiance meets blossoms in full flourish. ~Lustrous Satin ball gown with Floral Appliqué around chest and hemline.",
      category: "Lustre Bloom",
      image: Lustre,
      alt: "Where satin radiance meets blossoms in full flourish. ~Lustrous Satin ball gown with Floral Appliqué around chest and hemline."
    },
    {
      id: 6,
      title: "Eterna",
      description: "Eternal grace, transforming from aisle to celebration. ~silk Detachable Train with 3D Appliqués encircling the arms.",
      category: "Eterna",
      image: Eterna,
      alt: "Eternal grace, transforming from aisle to celebration. ~silk Detachable Train with 3D Appliqués encircling the arms."
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
      } else if (e.key === "ArrowRight") {
        setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1);
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage !== null && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [selectedImage]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || selectedImage === null) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) { // Swipe left
      setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1);
      touchStartX.current = null;
    } else if (diff < -50) { // Swipe right
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal text-foreground mb-4">
            Portfolio Showcase
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="font-display font-light text-lg sm:text-xl text-black/50 italic max-w-2xl mx-auto px-4">
            A glimpse into our world of bespoke bridal couture
          </p>
        </div>

        <div className="block sm:hidden w-full overflow-hidden px-4">
          <Carousel className="w-full mx-auto">
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={item.id}>
                  <div 
                    className="group cursor-pointer animate-slide-up overflow-hidden rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-500"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="font-body text-sm mb-3 px-4">{item.description}</p>
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium">
                            View Details
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {item.category} 
                        </span>
                      </div>
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer animate-slide-up overflow-hidden rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-display text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="font-body text-sm mb-3 px-4">{item.description}</p>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium">
                      View Details
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl text-[#6F4E37] font-light text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={handleClickOutside}
            ref={lightboxRef}
            role="dialog"
            aria-labelledby="lightbox-title"
            aria-describedby="lightbox-description"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col">
              <button
                ref={closeButtonRef}
                onClick={closeLightbox}
                className="absolute -top-6 sm:-top-4 -right-2 sm:right-0 text-white hover:text-primary transition-colors duration-300 z-10"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img 
                  src={portfolioItems[selectedImage].image}
                  alt={portfolioItems[selectedImage].alt}
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl z-10"
                />
              </div>

              <div className="mt-4 text-white text-center">
                <h3 id="lightbox-title" className="text-2xl text-white font-medium mb-2">
                  {portfolioItems[selectedImage].title}
                </h3>
                <p id="lightbox-description" className="body text-white/90 mb-3 max-w-lg mx-auto">
                  {portfolioItems[selectedImage].description}
                </p>
                {/* <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-medium">
                  {portfolioItems[selectedImage].category}
                </span> */}
              </div>

              {portfolioItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hidden sm:flex"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hidden sm:flex"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;