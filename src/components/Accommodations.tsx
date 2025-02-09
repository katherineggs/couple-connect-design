
import { Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Accommodations = () => {
  return (
    <section className="py-16 px-4 bg-wedding-beige">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-serif text-wedding-brown mb-8 text-center">
          Where to Stay
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="text-wedding-rose-gold" />
                <span>Hotel Gran Caporal</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-wedding-brown mb-2">
                Our reception venue offers special rates for wedding guests.
              </p>
              <p className="flex items-center gap-2 text-sm text-wedding-rose-gold">
                <MapPin size={16} />
                <span>Chiquimula City Center</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="text-wedding-rose-gold" />
                <span>Hotel Casa Blanca</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-wedding-brown mb-2">
                A comfortable option just 5 minutes from the church.
              </p>
              <p className="flex items-center gap-2 text-sm text-wedding-rose-gold">
                <MapPin size={16} />
                <span>Downtown Chiquimula</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
