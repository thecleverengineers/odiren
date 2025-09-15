import designerPortrait from "@/assets/designer.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-romantic">
              <img 
                src={designerPortrait} 
                alt="Odirenla Walling - Designer" 
                className="w-full h-[400px] sm:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Quote */}
            <div className="absolute -bottom-8 -right-2 sm:-right-8 bg-primary p-6 rounded-xl shadow-luxury max-w-[300px] sm:max-w-xs">
              <p className="font-display text-lg italic text-black/60">
                "Every gown is a story, delicately tailored to you."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal text-foreground mb-4">
                About The Designer
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mb-6 sm:mb-8"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 font-body text-base sm:text-md text-muted-foreground leading-relaxed">
              <p>
                Meet <span className="text-gold font-medium">Odirenla Walling</span>, 
                the visionary behind <span className="text-gold font-medium">ODIREN</span>. With over a decade of passion for couture, 
                she has transformed dreams into reality through her exquisite bridal designs.
              </p>
              
              <p>
                Her journey began with formal training at <span className="text-gold font-medium">INIFD Guwahati</span> and 
                continued with advanced studies at <span className="text-gold font-medium">Mei Sewcial House Vietnam</span>, 
                where she mastered the art of bespoke tailoring and luxury fabric handling.
              </p>
              
              <p>
                Today, from her atelier in Dimapur, Nagaland, Odirenla creates one-of-a-kind 
                gowns that celebrate each bride's unique story. Her vision is simple yet profound: 
                <em className="text-gold">"To create gowns that are as individual as the love stories they celebrate."</em>
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="text-center p-3 sm:p-4 bg-card rounded-lg border border-border">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#F4BBC9]">10+</div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-card rounded-lg border border-border">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gold">100+</div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground">Happy Brides</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;