import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  featured?: boolean;
}

const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  type,
  featured = false,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link
      to={`/property/${id}`}
      className={cn(
        "group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth",
        featured && "ring-2 ring-gold"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {featured && (
            <span className="px-3 py-1 bg-gold text-accent-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {type}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className={cn(
            "absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center transition-smooth",
            isFavorite
              ? "bg-gold text-accent-foreground"
              : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-gold hover:text-accent-foreground"
          )}
        >
          <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="text-2xl font-heading font-bold text-primary-foreground">
            {price}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-gold transition-smooth line-clamp-1">
          {title}
        </h3>
        
        <p className="flex items-center gap-1 text-muted-foreground text-sm mt-2">
          <MapPin className="h-4 w-4" />
          {location}
        </p>

        {/* Features */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Square className="h-4 w-4" />
            <span className="text-sm">{sqft}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
