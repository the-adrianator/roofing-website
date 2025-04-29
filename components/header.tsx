"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define logo paths with fallbacks
  const logoLight = "/images/logo-light.png";
  const logoDark = "/images/logo-dark.png";

  return (
    <>
      {/* Fixed Header */}
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 w-[95%] max-w-7xl",
          isScrolled ? "top-4" : "top-6"
        )}
      >
        <div
          className={cn(
            "rounded-full transition-all duration-300 backdrop-blur-md",
            isScrolled ? "bg-white/80 shadow-lg" : "bg-transparent"
          )}
        >
          {/* Removed container class and using custom padding */}
          <div className="flex items-center justify-between px-6 md:px-10 lg:px-12 py-3">
            {/* Logo - Positioned explicitly to the left */}
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-40 lg:h-12 lg:w-48">
                <Image
                  src={isScrolled ? logoDark : logoLight}
                  alt="London Building & Roofing"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Only visible on lg screens and above */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/services"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#2C3338] hover:text-[#456F8C]"
                    : "text-white hover:text-[#C5A572]"
                )}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#2C3338] hover:text-[#456F8C]"
                    : "text-white hover:text-[#C5A572]"
                )}
              >
                Portfolio
              </Link>
              <Link
                href="/sustainability"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#2C3338] hover:text-[#456F8C]"
                    : "text-white hover:text-[#C5A572]"
                )}
              >
                Sustainability
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#2C3338] hover:text-[#456F8C]"
                    : "text-white hover:text-[#C5A572]"
                )}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#2C3338] hover:text-[#456F8C]"
                    : "text-white hover:text-[#C5A572]"
                )}
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#2C3338] hover:text-[#456F8C]"
                    : "text-white hover:text-[#C5A572]"
                )}
              >
                Blog
              </Link>
            </nav>

            {/* Phone number and CTA - Only visible on lg screens and above */}
            <div className="hidden lg:flex items-center space-x-4">
              <div
                className={cn(
                  "flex items-center",
                  isScrolled ? "text-[#2C3338]" : "text-white"
                )}
              >
                <Phone className="h-4 w-4 mr-2 text-[#C5A572]" />
                <span className="font-bold">07551 139005</span>
              </div>

              <Button className="bg-[#C5A572] hover:bg-[#b39461] text-white rounded-full">
                Get a Quote
              </Button>
            </div>

            {/* Tablet/Mobile View - Phone number and Burger Menu */}
            <div className="lg:hidden flex items-center">
              <a
                href="tel:02012345678"
                className={cn(
                  "flex items-center mr-4 transition-colors",
                  isScrolled ? "text-[#2C3338]" : "text-white"
                )}
              >
                <Phone className="h-4 w-4 mr-1 text-[#C5A572]" />
                <span className="font-bold text-sm">07551 139005</span>
              </a>

              {/* Burger Menu Button - Reverted to transforming X */}
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300 ease-in-out",
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "",
                    isScrolled ? "bg-[#2C3338]" : "bg-white"
                  )}
                ></span>
                <span
                  className={cn(
                    "block w-6 h-0.5 my-1.5 transition-all duration-300 ease-in-out",
                    isMenuOpen ? "opacity-0" : "",
                    isScrolled ? "bg-[#2C3338]" : "bg-white"
                  )}
                ></span>
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300 ease-in-out",
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : "",
                    isScrolled ? "bg-[#2C3338]" : "bg-white"
                  )}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Mobile Menu - Fixed z-index issues */}
      <div
        className={cn(
          "fixed inset-0 bg-[#2C3338]/95 backdrop-blur-md z-50 lg:hidden transition-all duration-500",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Scrollable content area */}
        <div className="h-full overflow-y-auto pt-20">
          <div className="px-6 py-4">
            <nav className="flex flex-col space-y-8 pt-4">
              {[
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/sustainability", label: "Sustainability" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-white text-2xl font-medium hover:text-[#C5A572] transition-all duration-500",
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  )}
                  style={{
                    transitionDelay: `${isMenuOpen ? index * 100 : 0}ms`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className={cn(
                  "pt-8 transition-all duration-500",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${isMenuOpen ? 600 : 0}ms` }}
              >
                <Button
                  className="w-full bg-[#C5A572] hover:bg-[#b39461] text-white py-6 text-lg rounded-full transition-transform duration-300 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Button>
              </div>

              {/* Phone number with improved visibility */}
              <div
                className={cn(
                  "flex items-center justify-center mt-8 py-6 border-t border-white/20 transition-all duration-500",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${isMenuOpen ? 700 : 0}ms` }}
              >
                <a
                  href="tel:02012345678"
                  className="flex flex-col items-center"
                >
                  <p className="text-white/70 mb-2">24/7 Emergency Service</p>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-[#C5A572]" />
                    <span className="text-white text-xl font-bold">
                      07551 139005
                    </span>
                  </div>
                </a>
              </div>

              {/* Added extra padding at the bottom for better scrolling */}
              <div className="h-8"></div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
