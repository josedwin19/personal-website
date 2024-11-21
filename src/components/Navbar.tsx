import React from 'react';
import { MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const navLinks = [
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#techniques", label: "Techniques" },
    { href: "#tutorials", label: "Tutorials" },
    { href: "#media", label: "Media" },
    { href: "#tools", label: "Tools" },
    { href: "#blog", label: "Blog" }
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-gray-900">ENQ</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map(link => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export default Navbar;