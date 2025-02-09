
import { Copy } from "lucide-react";
import { toast } from "sonner";

export const GiftSection = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Account number copied!");
  };

  return (
    <section className="py-20 bg-wedding-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-wedding-brown font-serif mb-12">
          Gift Registry
        </h2>
        
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p className="text-wedding-brown mb-8">
            Your presence at our wedding is the greatest gift of all. However, if
            you wish to honor us with a gift, a monetary contribution would be
            greatly appreciated.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 border border-wedding-beige rounded-lg">
              <p className="text-sm text-wedding-brown mb-2">Bank Account</p>
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono">1234-5678-9012-3456</p>
                <button
                  onClick={() => handleCopy("1234-5678-9012-3456")}
                  className="text-wedding-rose-gold hover:text-wedding-brown transition-colors"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
