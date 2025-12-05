import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, User, LogOut, Settings } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const navLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/properties",
  label: "Properties"
}, {
  href: "/about",
  label: "About"
}, {
  href: "/contact",
  label: "Contact"
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {
    user,
    isAdmin,
    signOut
  } = useAuth();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-center">
            <img src={logoIcon} alt="Prestige Estates" style={{
            filter: 'sepia(1) saturate(3) hue-rotate(5deg) brightness(0.95)'
          }} className="h-10 w-10 object-contain mt-2 " />
            <span className="text-2xl font-heading font-bold text-foreground">
              Prestige<span className="text-gold">Estates</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={cn("text-sm font-medium transition-smooth hover:text-gold", location.pathname === link.href ? "text-gold" : "text-muted-foreground")}>
                {link.label}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              <Phone className="h-4 w-4" />
              (123) 456-7890
            </a>

            {user ? <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {isAdmin && <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>}
                  <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> : <Link to="/auth">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>}

            <Button variant="gold" size="sm">
              Schedule Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={cn("text-base font-medium py-2 transition-smooth hover:text-gold", location.pathname === link.href ? "text-gold" : "text-muted-foreground")}>
                  {link.label}
                </Link>)}

              {user ? <>
                  {isAdmin && <Link to="/admin" onClick={() => setIsOpen(false)} className="text-base font-medium py-2 text-muted-foreground hover:text-gold">
                      Admin Panel
                    </Link>}
                  <button onClick={() => {
              signOut();
              setIsOpen(false);
            }} className="text-base font-medium py-2 text-muted-foreground hover:text-gold text-left">
                    Sign Out
                  </button>
                </> : <Link to="/auth" onClick={() => setIsOpen(false)} className="text-base font-medium py-2 text-muted-foreground hover:text-gold">
                  Sign In
                </Link>}

              <Button variant="gold" className="mt-4">
                Schedule Tour
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;