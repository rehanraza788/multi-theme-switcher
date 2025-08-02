import React from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../styles/theme";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top equal to header height */}
      <div
        className="min-h-screen px-4 py-12 sm:px-8 md:px-16"
        style={{
          backgroundColor: themes[theme].colors.background.backgroundColor,
          color: themes[theme].colors.text.color,
          fontFamily: themes[theme].fonts.main.fontFamily,
          paddingTop: "4rem" // Additional padding if needed
        }}
      >
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
          >
            About Us
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            We are a passionate team building great digital products with a
            focus on quality, performance, and innovation.
          </p>
        </div>

        {/* Company Info Section */}
        <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Our company started in 2015 with a mission to simplify complex
            problems through design and technology. Since then, we've grown into
            a team that values creativity, collaboration, and customer success.
          </p>
          <p>
            We specialize in product development, user experience design, and
            scalable architecture. Our work has helped clients across 12+
            countries and has earned recognition in international design
            communities.
          </p>
          <p>
            At our core, we believe in building products that people love to
            use. Every line of code and pixel is crafted with purpose.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base">Want to know more?</p>
          <button
            className="mt-2 px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: themes[theme].colors.primary.backgroundColor,
              color: themes[theme].colors.buttonText.color
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
