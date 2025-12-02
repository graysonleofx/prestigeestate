import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-mansion.jpg";

const HeroSection = () => {
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern mansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/90 via-slate-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6 animate-fade-up">
            #1 Luxury Real Estate Agency
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Find Your Perfect
            <span className="block text-gold">Dream Home</span>
          </h1>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl animate-fade-up stagger-2">
            Discover exceptional properties in the most prestigious locations.
            Your dream home awaits with our curated collection of luxury estates.
          </p>

          {/* Search Box */}
          <div className="bg-card rounded-2xl p-6 shadow-card-hover animate-fade-up stagger-3">
            {/* Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSearchType("buy")}
                className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
                  searchType === "buy"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType("rent")}
                className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
                  searchType === "rent"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-smooth">
                  <option>All Locations</option>
                  <option>Beverly Hills</option>
                  <option>Malibu</option>
                  <option>Bel Air</option>
                  <option>Hollywood Hills</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Property Type
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-smooth">
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Price Range
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-smooth">
                  <option>Any Price</option>
                  <option>$500K - $1M</option>
                  <option>$1M - $2M</option>
                  <option>$2M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button variant="gold" size="lg" className="w-full h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-up stagger-4">
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                500+
              </p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                Premium Properties
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                1200+
              </p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                15+
              </p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
