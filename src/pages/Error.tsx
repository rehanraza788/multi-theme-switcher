import { useTheme } from "../context/ThemeContext";
import { themes } from "../styles/theme";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const Error = () => {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
      style={{
        backgroundColor: themes[theme].colors.background.backgroundColor,
        color: themes[theme].colors.text.color
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <FiAlertTriangle
            size={64}
            style={{ color: themes[theme].colors.primary.backgroundColor }}
          />
        </div>

        {/* Error Message */}
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
        >
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-md font-medium"
          style={{
            backgroundColor: themes[theme].colors.primary.backgroundColor,
            color: themes[theme].colors.buttonText.color
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
