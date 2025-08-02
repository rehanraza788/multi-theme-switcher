import { useTheme } from "../context/ThemeContext";
import { themes } from "../styles/theme";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className="w-full py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: themes[theme].colors.primary.backgroundColor,
        color: themes[theme].colors.buttonText.color
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Copyright */}
          <div className="mb-4 md:mb-0">
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
            >
              MultiTheme App
            </h2>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a className="hover:underline cursor-pointer">Privacy Policy</a>
            <a className="hover:underline cursor-pointer">Terms of Service</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 text-center text-xs opacity-80">
          <p>Made with for great user experiences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
