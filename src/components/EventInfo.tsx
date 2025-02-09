
import { MapPin, Clock } from "lucide-react";

export const EventInfo = () => {
  const openGoogleMaps = (location: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, "_blank");
  };

  return (
    <section className="py-20 bg-wedding-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-wedding-brown font-serif mb-16">
          Our Special Day
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ceremony */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl text-wedding-rose-gold font-serif">
              Religious Ceremony
            </h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-wedding-gold" />
                <span>4:00 PM</span>
              </p>
              <button
                onClick={() => openGoogleMaps("El Calvario Church, Chiquimula")}
                className="flex items-center justify-center gap-2 text-wedding-brown hover:text-wedding-rose-gold transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span>El Calvario Church, Chiquimula</span>
              </button>
            </div>
          </div>

          {/* Reception */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl text-wedding-rose-gold font-serif">
              Reception
            </h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-wedding-gold" />
                <span>6:00 PM</span>
              </p>
              <button
                onClick={() => openGoogleMaps("Hotel Gran Caporal, Chiquimula")}
                className="flex items-center justify-center gap-2 text-wedding-brown hover:text-wedding-rose-gold transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span>Hotel Gran Caporal, Chiquimula</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
