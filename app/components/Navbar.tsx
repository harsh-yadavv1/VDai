"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Home, FileText, Shield, Menu, X } from "lucide-react";
import { useState, memo, useCallback } from "react";
import Image from "next/image";

// Pinterest SVG icon
const PinterestIcon = memo(({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 50 50"
      className={className}
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        fill="currentColor"
        transform="scale(1.1) translate(-2.5 -2.5)"
        d="M18.896484 45.097656C19.75673 43.659418 20.867347 41.60359 21.308594 39.90625C21.570728 38.899887 22.648438 34.794922 22.648438 34.794922C23.348841 36.132057 25.395277 37.263672 27.574219 37.263672C34.058123 37.263672 38.732422 31.300682 38.732422 23.890625C38.732422 16.78653 32.935409 11.472656 25.476562 11.472656C16.196831 11.472656 11.271484 17.700825 11.271484 24.482422C11.271484 27.636307 12.94892 31.562193 15.634766 32.8125C16.041611 33.001865 16.260073 32.919834 16.353516 32.525391C16.425459 32.226044 16.788267 30.766792 16.951172 30.087891C17.003269 29.871239 16.978043 29.68405 16.802734 29.470703C15.913793 28.392399 15.201172 26.4118 15.201172 24.564453C15.201172 19.822048 18.791452 15.232422 24.908203 15.232422C30.18976 15.232422 33.888672 18.832872 33.888672 23.980469C33.888672 29.796219 30.95207 33.826172 27.130859 33.826172C25.020554 33.826172 23.440361 32.080359 23.947266 29.939453C24.555054 27.38426 25.728516 24.626944 25.728516 22.78125C25.728516 21.130713 24.842754 19.753906 23.007812 19.753906C20.850369 19.753906 19.117188 21.984457 19.117188 24.974609C19.117187 26.877359 19.761719 28.166016 19.761719 28.166016C19.761719 28.166016 17.630543 37.176514 17.240234 38.853516C16.849091 40.52931 16.953851 42.786365 17.115234 44.466797C17.663 44.704 18.27036 44.91988 18.896484 45.097656Z"
      />
    </svg>
  );
});
PinterestIcon.displayName = "PinterestIcon";

const NavLink = memo(
  ({
    href,
    label,
    icon: Icon,
    isActive,
    onClick,
  }: {
    href: string;
    label: string;
    icon: any;
    isActive: boolean;
    onClick?: () => void;
  }) => (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 ${
        isActive
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
          : "text-gray-600 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <Icon
        className={`w-4 h-4 mr-2 transition-transform duration-200 ${
          isActive ? "scale-110" : ""
        }`}
      />
      {label}
    </Link>
  )
);
NavLink.displayName = "NavLink";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/instagram", label: "Instagram", icon: Instagram },
  { href: "/pinterest", label: "Pinterest", icon: PinterestIcon },
  { href: "/terms", label: "Terms", icon: FileText },
  { href: "/privacy", label: "Privacy", icon: Shield },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VDBYai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                isActive={isActive(item.href)}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 max-h-96"
            : "opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              isActive={isActive(item.href)}
              onClick={closeMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
