import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: "1",
    image: property1,
    title: "Modern Skyline Penthouse",
    location: "Downtown, Los Angeles",
    price: "$4,250,000",
    beds: 4,
    baths: 3,
    sqft: "4,500 sqft",
    type: "Penthouse",
    featured: true,
  },
  {
    id: "2",
    image: property2,
    title: "Oceanfront Paradise Villa",
    location: "Malibu, California",
    price: "$8,900,000",
    beds: 6,
    baths: 5,
    sqft: "7,200 sqft",
    type: "Villa",
    featured: true,
  },
  {
    id: "3",
    image: property3,
    title: "Mountain View Retreat",
    location: "Aspen, Colorado",
    price: "$5,750,000",
    beds: 5,
    baths: 4,
    sqft: "5,800 sqft",
    type: "House",
    featured: false,
  },
  {
    id: "4",
    image: property4,
    title: "Classic European Estate",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    beds: 8,
    baths: 10,
    sqft: "15,000 sqft",
    type: "Estate",
    featured: true,
  },
  {
    id: "5",
    image: property5,
    title: "Industrial Chic Loft",
    location: "Brooklyn, New York",
    price: "$2,800,000",
    beds: 3,
    baths: 2,
    sqft: "3,200 sqft",
    type: "Loft",
    featured: false,
  },
  {
    id: "6",
    image: property6,
    title: "Tuscan Vineyard Villa",
    location: "Napa Valley, California",
    price: "$6,950,000",
    beds: 5,
    baths: 4,
    sqft: "6,500 sqft",
    type: "Villa",
    featured: false,
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Properties
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Featured Listings
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              Explore our handpicked selection of the finest properties available,
              each offering exceptional luxury and unparalleled comfort.
            </p>
          </div>
          <Link to="/properties">
            <Button variant="outline" size="lg">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
