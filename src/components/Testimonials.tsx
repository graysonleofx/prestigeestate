import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Tech Innovations",
    content:
      "Prestige Estates made finding our dream home an absolute pleasure. Their attention to detail and understanding of what we were looking for was exceptional. The team went above and beyond to ensure every aspect of the purchase was seamless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Investment Banker",
    content:
      "As someone who values their time, I appreciated how efficient and professional the Prestige Estates team was. They presented only properties that matched my exact criteria, saving me countless hours. Highly recommended for luxury property seekers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    content:
      "The level of personalization and care I received from Prestige Estates was remarkable. They understood my aesthetic preferences and found properties that perfectly aligned with my vision. A truly five-star experience from start to finish.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 mt-4">
            Don't just take our word for it. Hear from satisfied clients who
            found their dream homes with Prestige Estates.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    {/* Quote Icon */}
                    <Quote className="h-12 w-12 text-gold/30 mb-6" />
                    
                    {/* Content */}
                    <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-gold"
                      />
                      <div>
                        <p className="font-heading font-semibold text-primary-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-primary-foreground/60 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-gold fill-gold"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth"
            >
              <ChevronLeft className="h-6 w-6 text-primary-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-smooth",
                    index === activeIndex
                      ? "w-8 bg-gold"
                      : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  )}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth"
            >
              <ChevronRight className="h-6 w-6 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
