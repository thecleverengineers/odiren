import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo/odiren-logo.png";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft' 
        : 'bg-background/70 backdrop-blur-md border-b border-border/50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-display text-xl sm:text-3xl font-bold text-primary-foreground">
            <img src={logo} alt="Odiren Bridal Dreams" className="h-4 sm:h-[25px]" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav text-sm uppercase font-medium text-foreground hover:text-[#AC9362] transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#AC9362] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          {/* <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-primary text-primary-foreground px-4 lg:px-6 py-2 rounded-lg font-body font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-romantic"
          >
            Book Consultation
          </button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav text-left text-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              {/* <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium text-center hover:bg-primary/90 transition-all duration-300 mt-4"
              >
                Book Consultation
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;