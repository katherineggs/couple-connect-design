
import { ScrollText } from "lucide-react";

export const DressCode = () => {
  return (
    <section className="py-20 bg-wedding-beige/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-wedding-brown font-serif mb-12">
          Dress Code
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <ScrollText className="h-16 w-16 text-wedding-gold" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-wedding-rose-gold font-serif mb-4">
                Formal Attire
              </h3>
              <p className="text-wedding-brown">
                We kindly request our guests to dress in formal attire suitable for
                an evening celebration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-wedding-brown">
              <div>
                <h4 className="font-serif text-lg mb-2">Ladies</h4>
                <p>
                  Floor-length or cocktail dresses
                  <br />
                  Elegant evening wear
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-lg mb-2">Gentlemen</h4>
                <p>
                  Dark suits
                  <br />
                  Dress shoes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
