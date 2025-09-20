import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">{/* Add max-width constraint */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal text-foreground mb-4">
            Begin Your Bridal Journey
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="font-display font-light text-lg sm:text-xl text-black/50 italic max-w-2xl mx-auto px-4">
            Ready to create your dream gown? Let's start this beautiful journey together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-foreground mb-6 sm:mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blush rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="body font-medium text-foreground mb-1 text-sm sm:text-base">Visit Our Atelier</h4>
                    <p className="body text-muted-foreground text-sm sm:text-base">
                      Kuda B, Half Nagarjan<br />
                      Dimapur, Nagaland
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blush rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="body font-medium text-foreground mb-1 text-sm sm:text-base">Call Us</h4>
                    <p className="body text-muted-foreground text-sm sm:text-base">+91 9863656508</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blush rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="body font-medium text-foreground mb-1 text-sm sm:text-base">Email Us</h4>
                    <p className="body text-muted-foreground text-sm sm:text-base">odirenwalling51@gmail.com</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blush rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="body font-medium text-foreground mb-1 text-sm sm:text-base">Follow Us</h4>
                    <a href="https://www.instagram.com/odiren__?utm_source=ig_web_button_share_sheet&igsh=bnAxMTNuYW5wMWhr" target="_blank" rel="noopener noreferrer">
                      <p className="body text-muted-foreground text-sm sm:text-base">@odiren__</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Consultation Info */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-soft">
            <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
              Consultation Process
            </h4>
            <ul className="space-y-2 sm:space-y-3 body text-muted-foreground text-sm sm:text-base">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Initial consultation to discuss your vision
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Design sketches and fabric selection
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Measurements and fitting schedule
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Final fittings and delivery
              </li>
            </ul>
          </div>


          {/* Contact Form */}
          {/* <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-luxury">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
                Schedule a Consultation
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-body"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                    Tell us about your dream gown
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-body resize-none"
                    placeholder="Describe your vision, wedding date, style preferences, or any specific requests..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;