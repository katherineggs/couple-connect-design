
import { useState } from "react";
import { toast } from "sonner";

export const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log("RSVP Data:", formData);
    toast.success("Thank you for your RSVP!");
    setFormData({
      name: "",
      email: "",
      attending: "yes",
      guests: "1",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-wedding-beige/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-wedding-brown font-serif mb-12">
          RSVP
        </h2>
        
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-wedding-brown mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-wedding-beige rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-rose-gold"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-wedding-brown mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-wedding-beige rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-rose-gold"
            />
          </div>

          <div>
            <label htmlFor="attending" className="block text-wedding-brown mb-2">
              Will you attend?
            </label>
            <select
              id="attending"
              value={formData.attending}
              onChange={(e) =>
                setFormData({ ...formData, attending: e.target.value })
              }
              className="w-full px-4 py-2 border border-wedding-beige rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-rose-gold"
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>

          <div>
            <label htmlFor="guests" className="block text-wedding-brown mb-2">
              Number of Guests
            </label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value })
              }
              className="w-full px-4 py-2 border border-wedding-beige rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-rose-gold"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-wedding-brown mb-2">
              Message for the Couple
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 border border-wedding-beige rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-rose-gold h-32"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-wedding-rose-gold text-white py-3 rounded-md hover:bg-wedding-rose-gold/90 transition-colors"
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
};
