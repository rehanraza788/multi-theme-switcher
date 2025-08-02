import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../styles/theme";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{
        backgroundColor: themes[theme].colors.background.backgroundColor,
        color: themes[theme].colors.text.color
      }}
    >
      {/* Desktop Header */}
      <div className="hidden md:flex container mx-auto p-4 items-center justify-between">
        {/* Logo */}
        <h1
          className="text-xl font-bold"
          style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
        >
          MultiTheme Store
        </h1>

        {/* Centered Navigation Links */}
        <nav className="flex space-x-8">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity px-2 py-1"
            style={{ color: themes[theme].colors.text.color }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:opacity-80 transition-opacity px-2 py-1"
            style={{ color: themes[theme].colors.text.color }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:opacity-80 transition-opacity px-2 py-1"
            style={{ color: themes[theme].colors.text.color }}
          >
            Contact
          </Link>
        </nav>

        {/* Theme Selector */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as keyof typeof themes)}
          className="px-3 py-2 rounded-md"
          style={{
            backgroundColor: themes[theme].colors.primary.backgroundColor,
            color: themes[theme].colors.buttonText.color
          }}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden p-4">
        <div className="flex items-center justify-between">
          <h1
            className="text-xl font-bold"
            style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
          >
            MultiTheme Store
          </h1>

          <div className="flex items-center space-x-4">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as keyof typeof themes)}
              className="px-3 py-2 rounded-md text-sm"
              style={{
                backgroundColor: themes[theme].colors.primary.backgroundColor,
                color: themes[theme].colors.buttonText.color
              }}
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: themes[theme].colors.text.color }}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity py-2 border-b"
              style={{
                color: themes[theme].colors.text.color,
                borderColor: themes[theme].colors.text.color
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:opacity-80 transition-opacity py-2 border-b"
              style={{
                color: themes[theme].colors.text.color,
                borderColor: themes[theme].colors.text.color
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:opacity-80 transition-opacity py-2 border-b"
              style={{
                color: themes[theme].colors.text.color,
                borderColor: themes[theme].colors.text.color
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
