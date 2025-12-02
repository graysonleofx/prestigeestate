import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, Grid, List } from "lucide-react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const allProperties = [
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

const Properties = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      property.type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2">
              Luxury Properties
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Browse our exclusive collection of premium properties in the most
              sought-after locations around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring transition-smooth"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-smooth"
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="loft">Loft</option>
                <option value="estate">Estate</option>
              </select>

              <Button variant="outline" size="default">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </Button>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-1 p-1 bg-secondary rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-smooth ${
                    viewMode === "grid"
                      ? "bg-card shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-smooth ${
                    viewMode === "list"
                      ? "bg-card shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-8">
            Showing {filteredProperties.length} properties
          </p>

          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No properties found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Properties;
