import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2">
              <img 
                src={logoIcon} 
                alt="Prestige Estates" 
                className="h-10 w-10 object-contain"
                style={{ filter: 'sepia(1) saturate(3) hue-rotate(5deg) brightness(0.95)' }}
              />
              <span className="text-2xl font-heading font-bold">
                Prestige<span className="text-gold">Estates</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner in luxury real estate. We help you find the
              perfect property that matches your lifestyle and aspirations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Properties", "About Us", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-smooth text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Property Types</h4>
            <ul className="space-y-3">
              {["Luxury Homes", "Penthouses", "Villas", "Apartments", "Commercial"].map((item) => (
                <li key={item}>
                  <Link
                    to="/properties"
                    className="text-primary-foreground/70 hover:text-gold transition-smooth text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Luxury Avenue, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/70 hover:text-gold transition-smooth text-sm"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="mailto:info@prestigeestates.com"
                  className="text-primary-foreground/70 hover:text-gold transition-smooth text-sm"
                >
                  info@prestigeestates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Prestige Estates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-smooth"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
