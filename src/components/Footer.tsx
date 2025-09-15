import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">ODIREN</h3>
            <p className="font-body text-background/80 leading-relaxed text-sm sm:text-base">
              Creating timeless elegance for the modern bride. Every gown tells a story, 
              and we're here to help you write yours.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/odiren_bridal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:odirenwalling51@gmail.com"
                className="w-10 h-10 bg-background/20 hover:bg-gold rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919863656508"
                className="w-10 h-10 bg-background/20 hover:bg-blush rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-display text-lg sm:text-xl font-semibold">Our Services</h4>
            <ul className="space-y-1 sm:space-y-2 font-body text-background/80 text-sm sm:text-base">
              <li>Bespoke Bridal Gowns</li>
              <li>Bridesmaids Dresses</li>
              <li>Bridal Party Coordination</li>
              <li>Ready-to-Wear Collection</li>
              <li>Personal Styling</li>
              <li>Alterations & Fittings</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-display text-lg sm:text-xl font-semibold">Visit Us</h4>
            <div className="space-y-2 sm:space-y-3 font-body text-background/80 text-sm sm:text-base">
              <p>
                Kuda B, Half Nagarjan<br />
                Dimapur, Nagaland
              </p>
              <p>Phone: +91 9863656508</p>
              <p>Email: odirenwalling51@gmail.com</p>
              <p className="text-xs sm:text-sm pt-2">
                <strong>By Appointment Only</strong><br />
                Monday - Saturday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="font-body text-xs sm:text-sm text-background/60">
            © 2024 ODIREN. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 font-body text-xs sm:text-sm text-background/60">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>for every bride's special day</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;