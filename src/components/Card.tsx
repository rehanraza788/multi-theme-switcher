import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../styles/theme";
import type { Product } from "../services/api";

interface CardProps {
  product: Product;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const { theme } = useTheme();

  // Enhanced Theme 2 styling
  const theme2Styles = {
    card: {
      backgroundColor: "#1e1e1e",
      color: "#f0f0f0",
      border: "1px solid #383838"
    },
    button: {
      backgroundColor: "#3a3a3a",
      hoverBackgroundColor: "#4d4d4d",
      color: "#ffffff"
    },
    rating: {
      backgroundColor: "#383838",
      color: "#f0f0f0"
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`p-4 rounded-lg shadow-lg mb-6 mx-2 ${
        theme === "theme2"
          ? "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"
          : "w-full"
      }`}
      style={{
        backgroundColor:
          theme === "theme2"
            ? theme2Styles.card.backgroundColor
            : themes[theme].colors.card.backgroundColor,
        color:
          theme === "theme2"
            ? theme2Styles.card.color
            : themes[theme].colors.text.color,
        border: theme === "theme2" ? theme2Styles.card.border : "none"
      }}
    >
      {/* Product Image */}
      <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3
          className="text-lg md:text-xl font-bold mb-2 truncate"
          style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
        >
          {product.title}
        </h3>
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span className="capitalize">{product.category}</span>
        </div>
      </div>

      {/* Price and Rating */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-lg md:text-xl">${product.price}</span>
        <div
          className="flex items-center px-3 py-1 rounded-full"
          style={{
            backgroundColor:
              theme === "theme2"
                ? theme2Styles.rating.backgroundColor
                : "#f0f0f0",
            color: theme === "theme2" ? theme2Styles.rating.color : "#333333"
          }}
        >
          <span className="text-sm md:text-base">
            {product.rating.rate} ★ ({product.rating.count})
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-sm md:text-base mb-5 line-clamp-2"
        style={{
          fontFamily: themes[theme].fonts.main.fontFamily,
          color: theme === "theme2" ? "#b0b0b0" : "inherit"
        }}
      >
        {product.description}
      </p>

      {/* Add to Cart Button */}
      <button
        className="w-full py-3 rounded-lg font-medium transition-all hover:shadow-lg"
        style={{
          backgroundColor:
            theme === "theme2"
              ? theme2Styles.button.backgroundColor
              : themes[theme].colors.primary.backgroundColor,
          color:
            theme === "theme2"
              ? theme2Styles.button.color
              : themes[theme].colors.buttonText.color
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor =
            theme === "theme2"
              ? theme2Styles.button.hoverBackgroundColor
              : themes[theme].colors.primary.hoverBackgroundColor;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor =
            theme === "theme2"
              ? theme2Styles.button.backgroundColor
              : themes[theme].colors.primary.backgroundColor;
        }}
      >
        Add to Cart
      </button>
    </motion.div>
  );
};
