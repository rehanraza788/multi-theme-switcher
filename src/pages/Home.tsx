import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useTheme } from "../context/ThemeContext";
import { fetchProducts, type Product } from "../services/api";
import { themes } from "../styles/theme";

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <LoadingScreen theme={theme} />;
  if (error) return <ErrorScreen theme={theme} error={error} />;

  return (
    <div
      className="min-h-screen pt-16 pb-8"
      style={{
        backgroundColor: themes[theme].colors.background.backgroundColor,
        color: themes[theme].colors.text.color
      }}
    >
      <div
        className="container mx-auto p-4"
        style={{ fontFamily: themes[theme].fonts.main.fontFamily }}
      >
        <h1
          className="text-3xl font-bold mb-6"
          style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
        >
          Our Products
        </h1>
        <div
          className={`gap-6 ${
            themes[theme].layout === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : themes[theme].layout === "flex-row"
              ? "flex flex-row flex-wrap"
              : "flex flex-col"
          }`}
        >
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const LoadingScreen: React.FC<{ theme: keyof typeof themes }> = ({ theme }) => (
  <div
    className="min-h-screen pt-16 pb-8"
    style={{
      backgroundColor: themes[theme].colors.background.backgroundColor,
      color: themes[theme].colors.text.color
    }}
  >
    <div className="container mx-auto p-4 text-center">Loading products...</div>
  </div>
);

const ErrorScreen: React.FC<{ theme: keyof typeof themes; error: string }> = ({
  theme,
  error
}) => (
  <div
    className="min-h-screen pt-16 pb-8"
    style={{
      backgroundColor: themes[theme].colors.background.backgroundColor,
      color: themes[theme].colors.text.color
    }}
  >
    <div className="container mx-auto p-4 text-center" style={{ color: "red" }}>
      {error}
    </div>
  </div>
);
