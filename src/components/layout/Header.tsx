"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, MapPin, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Registration", href: "#registration" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pharmaceutical-500 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">74</span>
            </div>
            <div className="hidden md:block">
              <h1
                className={`font-bold text-lg ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                74th IPC 2025
              </h1>
              <p
                className={`text-sm ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                Indian Pharmaceutical Congress
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-pharmaceutical-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`text-sm ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Feb 15-17, 2025</span>
              </div>
            </div>
            <Link
              href="#registration"
              className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <nav className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 font-medium hover:text-pharmaceutical-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>February 15-17, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
              <Link
                href="#registration"
                className="block w-full text-center bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
