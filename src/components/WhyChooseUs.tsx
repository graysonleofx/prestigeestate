import { Shield, Award, Users, Clock, CheckCircle, Home } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description:
      "All our properties are thoroughly verified and transactions are secured with industry-leading protocols.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized as the top luxury real estate agency for 5 consecutive years with exceptional service.",
  },
  {
    icon: Users,
    title: "Expert Agents",
    description:
      "Our team of certified professionals brings decades of combined experience in luxury real estate.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for all your property inquiries, viewings, and transaction support.",
  },
  {
    icon: CheckCircle,
    title: "Verified Listings",
    description:
      "Every property in our portfolio undergoes rigorous verification for authenticity and quality.",
  },
  {
    icon: Home,
    title: "Premium Selection",
    description:
      "Access to exclusive off-market properties and the finest luxury homes in prime locations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            The Prestige Advantage
          </h2>
          <p className="text-muted-foreground mt-4">
            We go beyond traditional real estate services to provide an
            unparalleled experience in luxury property acquisition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-smooth">
                <feature.icon className="h-7 w-7 text-gold group-hover:text-accent-foreground transition-smooth" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
