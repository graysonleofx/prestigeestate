import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Calendar,
  Phone,
  ChevronLeft,
  Check,
  Car,
  Trees,
  Wifi,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const propertyData: Record<string, any> = {
  "1": {
    images: [property1, property2, property3],
    title: "Modern Skyline Penthouse",
    location: "Downtown, Los Angeles",
    price: "$4,250,000",
    beds: 4,
    baths: 3,
    sqft: "4,500",
    yearBuilt: 2021,
    type: "Penthouse",
    description:
      "Experience unparalleled luxury living in this stunning penthouse offering breathtaking panoramic views of the Los Angeles skyline. This meticulously designed residence features floor-to-ceiling windows, premium finishes throughout, and an open-concept layout perfect for entertaining. The chef's kitchen boasts top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite is a true retreat with a spa-like bathroom and private terrace.",
    features: [
      "Floor-to-ceiling windows",
      "Private rooftop terrace",
      "Smart home technology",
      "Wine cellar",
      "Home theater",
      "Fitness center access",
      "24/7 concierge",
      "Private elevator",
    ],
    agent: {
      name: "Alexandra Sterling",
      phone: "(123) 456-7890",
      email: "alexandra@prestigeestates.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    },
  },
  "2": {
    images: [property2, property1, property4],
    title: "Oceanfront Paradise Villa",
    location: "Malibu, California",
    price: "$8,900,000",
    beds: 6,
    baths: 5,
    sqft: "7,200",
    yearBuilt: 2019,
    type: "Villa",
    description:
      "Discover coastal perfection in this magnificent oceanfront villa. Wake up to the sound of waves and stunning Pacific Ocean views from nearly every room. This architectural masterpiece seamlessly blends indoor and outdoor living with expansive glass walls that open to multiple terraces and a resort-style infinity pool.",
    features: [
      "Direct beach access",
      "Infinity pool",
      "Outdoor kitchen",
      "Guest house",
      "Home gym",
      "Solar panels",
      "3-car garage",
      "Professional landscaping",
    ],
    agent: {
      name: "James Morrison",
      phone: "(123) 456-7891",
      email: "james@prestigeestates.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  },
};

// Default property for IDs not in our data
const defaultProperty = {
  images: [property3, property4, property5],
  title: "Luxury Property",
  location: "Prime Location",
  price: "$5,500,000",
  beds: 5,
  baths: 4,
  sqft: "5,000",
  yearBuilt: 2020,
  type: "House",
  description:
    "An exceptional property featuring premium finishes and an ideal location. This home offers the perfect blend of luxury, comfort, and functionality.",
  features: [
    "Gourmet kitchen",
    "Master suite",
    "Home office",
    "Swimming pool",
    "Landscaped gardens",
    "Smart home system",
    "Security system",
    "Climate control",
  ],
  agent: {
    name: "Victoria Chen",
    phone: "(123) 456-7892",
    email: "victoria@prestigeestates.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
};

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const property = propertyData[id || ""] || defaultProperty;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/properties"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Properties
          </Link>
        </div>

        {/* Image Gallery */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={property.images[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {property.images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "aspect-[16/10] lg:aspect-[16/9] rounded-xl overflow-hidden transition-smooth",
                    activeImage === index ? "ring-2 ring-gold" : "opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Property Info */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full">
                        {property.type}
                      </span>
                      <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
                        {property.title}
                      </h1>
                      <p className="flex items-center gap-2 text-muted-foreground mt-2">
                        <MapPin className="h-5 w-5" />
                        {property.location}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center transition-smooth",
                          isFavorite
                            ? "bg-gold text-accent-foreground"
                            : "bg-secondary text-foreground hover:bg-gold hover:text-accent-foreground"
                        )}
                      >
                        <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
                      </button>
                      <button className="h-12 w-12 rounded-xl bg-secondary text-foreground flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-3xl md:text-4xl font-heading font-bold text-gold mt-4">
                    {property.price}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <Bed className="h-6 w-6 mx-auto text-gold mb-2" />
                    <p className="text-lg font-semibold text-foreground">
                      {property.beds}
                    </p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <Bath className="h-6 w-6 mx-auto text-gold mb-2" />
                    <p className="text-lg font-semibold text-foreground">
                      {property.baths}
                    </p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <Square className="h-6 w-6 mx-auto text-gold mb-2" />
                    <p className="text-lg font-semibold text-foreground">
                      {property.sqft}
                    </p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <Calendar className="h-6 w-6 mx-auto text-gold mb-2" />
                    <p className="text-lg font-semibold text-foreground">
                      {property.yearBuilt}
                    </p>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    About This Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Property Features
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {property.features.map((feature: string) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gold/10 flex items-center justify-center">
                          <Check className="h-4 w-4 text-gold" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Agent Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card sticky top-28">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                    Contact Agent
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {property.agent.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Property Specialist
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button variant="gold" size="lg" className="w-full">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Tour
                    </Button>
                    <a href={`tel:${property.agent.phone}`}>
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="mr-2 h-5 w-5" />
                        {property.agent.phone}
                      </Button>
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Response time: Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default PropertyDetail;
