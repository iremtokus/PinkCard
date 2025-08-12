import React, { useState } from "react";
import ProductDetail from "./pages/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage"; // 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartPage from "./pages/CartPage";
import { MdOutlineSavedSearch } from "react-icons/md";
import HeroVideo from "./components/HeroVideo";




import bileklik from "./images/bileklik.webp";
import bileklik2 from "./images/shopping.webp";
import bileklik3 from "./images/img-0019.webp";
import bileklik4 from "./images/bileklik4.webp";
import bileklik5 from "./images/bileklik5.webp";
import bileklik6 from "./images/bleklik6.webp";
import bileklik7 from "./images/bileklik7.webp";
import bileklik8 from "./images/bileklik8.webp";
import bileklik9 from "./images/bileklik9.webp";
import bileklik10 from "./images/bileklik10.webp";
import kolye1 from "./images/pastel.webp";
import kolye2 from "./images/juicy charm.webp";
import kolye3 from "./images/su yolu.webp";
import kolye4 from "./images/kolye4.webp";
import kolye5 from "./images/kolye5.webp";
import kolye6 from "./images/kolye6.webp";
import kolye7 from "./images/kolye7.webp";
import kolye8 from "./images/kolye8.webp";
import kolye9 from "./images/kolye9.webp";
import kolye10 from "./images/kolye10.webp";
import küpe1 from "./images/watermelon.webp";
import küpe2 from "./images/golden snail.webp";
import küpe3 from "./images/blush bloom.webp";
import yüzük1 from "./images/vintageflower.webp";
import yüzük2 from "./images/botanicflower.webp";
import yüzük3 from "./images/pinkbow.webp";
import yüzük4 from "./images/yüzük4.webp";
import yüzük5 from "./images/yüzük5.webp";
import yüzük6 from "./images/yüzük6.webp";
import yüzük7 from "./images/yüzük7.webp";
import yüzük8 from "./images/yüzük8.webp";
import yüzük9 from "./images/yüzük9.webp";
import yüzük10 from "./images/yüzük10.webp";
import halhal1 from "./images/çiçekhalhal.webp";
import halhal2 from "./images/kelebekhalhal.webp";
import halhal3 from "./images/halhal3.webp";
import halhal4 from "./images/halhal4.webp";
import halhal5 from "./images/halhal5.webp";
import halhal6 from "./images/halhal6.webp";
import halhal7 from "./images/halhal7.webp";
import halhal8 from "./images/halhal8.webp";
import halhal9 from "./images/halhal9.webp";
import halhal10 from "./images/halhal10.webp";
import küpe4 from "./images/shell küpe.webp";
import küpe5 from "./images/küpe5.webp";
import küpe6 from "./images/küpe6.webp";
import küpe7 from "./images/küpe7.webp";
import küpe8 from "./images/küpe8.webp";
import küpe9 from "./images/küpe9.webp";
import küpe10 from "./images/küpe10.webp";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const allProducts = [
    { id: 1, image: bileklik, name: "Pembe Kalpli Bileklik", price: "249.90", category: "Bileklik" },
    { id: 2, image: bileklik2, name: "Altın Yıldızlı Bileklik", price: "279.90", category: "Bileklik" },
    { id: 3, image: bileklik3, name: "Gümüş Taşlı Bileklik", price: "424.90", category: "Bileklik" },
    { id: 4, image: kolye1, name: "Pastel Flower Kolye", price: "500.90", category: "Kolye" },
    { id: 5, image: kolye2, name: "Juicy Charm Kolye", price: "400.90", category: "Kolye" },
    { id: 6, image: kolye3, name: "Su Yolu Kolye", price: "1416.90", category: "Kolye" },
    { id: 7, image: küpe1, name: "Watermelon Küpe", price: "331.90", category: "Küpe" },
    { id: 8, image: küpe2, name: "Golden Snail Küpe", price: "331.90", category: "Küpe" },
    { id: 9, image: küpe3, name: "Blush Bloom Küpe", price: "323.90", category: "Küpe" },
    { id: 10, image: yüzük1, name: "Vintage Flower Yüzük", price: "340.90", category: "Yüzük" },
    { id: 11, image: yüzük2, name: "Botanic Yüzük", price: "408.90", category: "Yüzük" },
    { id: 12, image: yüzük3, name: "Pink Bow Yüzük", price: "408.90", category: "Yüzük" },
    { id: 13, image: halhal1, name: "Çiçek Şekilli Halhal", price: "815.90", category: "Halhal" },
    { id: 14, image: halhal2, name: "Kelebek Halhal", price: "854.90", category: "Halhal" },
    { id: 15, image: küpe4, name: "Shell & Dolphin Küpe", price: "297,90", category: "Küpe" },
    { id: 16, image: küpe5, name: "Sweet Grapes Küpe", price: "340,90", category: "Küpe" },
    { id: 17, image: küpe6, name: "Blueberry Muffin Küpe", price: "340,90", category: "Küpe" },
    { id: 18, image: küpe7, name: "Golden Sparkle Küpe", price: "297,90", category: "Küpe" },
    { id: 19, image: küpe8, name: "Orkide Küpe", price: "306,90", category: "Küpe" },
    { id: 20, image: küpe9, name: "Çiçek Küpe", price: "197,90", category: "Küpe" },
    { id: 21, image: küpe10, name: "Su Yolu Gümüş Küpe", price: "382,90", category: "Küpe" },
    { id: 22, image: bileklik4, name: "Pearly Flower Bileklik", price: "249.90", category: "Bileklik" },
    { id: 23, image: bileklik5, name: "Crystal Fish Bileklik", price: "249.90", category: "Bileklik" },
    { id: 24, image: bileklik6, name: "Porselen Boncuk Bileklik", price: "280.90", category: "Bileklik" },
    { id: 25, image: bileklik7, name: "Golden Bow Bileklik", price: "249.90", category: "Bileklik" },
    { id: 26, image: bileklik8, name: "ColorBlossom Bileklik", price: "600.90", category: "Bileklik" },
    { id: 27, image: bileklik9, name: "Renkli Çiçek Bileklik", price: "550.90", category: "Bileklik" },
    { id: 28, image: bileklik10, name: "Colorful Bilezik", price: "408.90", category: "Bileklik" },
    { id: 29, image: kolye4, name: "Aqua Dream Kolye", price: "1216.90", category: "Kolye" },
    { id: 30, image: kolye5, name: "VivaGem Y Kolye", price: "450.90", category: "Kolye" },
    { id: 31, image: kolye6, name: "Sea Lover Çelik Kolye", price: "400.90", category: "Kolye" },
    { id: 32, image: kolye7, name: "Star & Shell Kolye", price: "700.90", category: "Kolye" },
    { id: 33, image: kolye8, name: "Colorful Heartline Kolye", price: "1416.90", category: "Kolye" },
    { id: 34, image: kolye9, name: "Starfish Y Kolye", price: "500.90", category: "Kolye" },
    { id: 35, image: kolye10, name: "Cowboy Star Kolye", price: "416.90", category: "Kolye" },
    { id: 36, image: yüzük4, name: "Queen's Heart Yüzük", price: "408.90", category: "Yüzük" },
    { id: 37, image: yüzük5, name: "Shiny Bow Yüzük", price: "480.90", category: "Yüzük" },
    { id: 38, image: yüzük6, name: "Blooming Love Yüzük", price: "408.90", category: "Yüzük" },
    { id: 39, image: yüzük7, name: "Pink Blossom Yüzük", price: "408.90", category: "Yüzük" },
    { id: 40, image: yüzük8, name: "Twist of Love Yüzük", price: "408.90", category: "Yüzük" },
    { id: 41, image: yüzük9, name: "Butterfly Bloom Yüzük", price: "408.90", category: "Yüzük" },
    { id: 42, image: yüzük10, name: "Moonlight Yüzük", price: "408.90", category: "Yüzük" },
    { id: 43, image: halhal3, name: "İncili Kırık Taşlı Halhal", price: "327.90", category: "Halhal" },
    { id: 44, image: halhal4, name: "Mavi Yıldızlı Halhal", price: "327.90", category: "Halhal" },
    { id: 45, image: halhal5, name: "Ametist Halhal", price: "327.90", category: "Halhal" },
    { id: 46, image: halhal6, name: "Sedef Tasarım Halhal", price: "374.90", category: "Halhal" },
    { id: 47, image: halhal7, name: "Zirkon Taşlı Halhal", price: "887.90", category: "Halhal" },
    { id: 48, image: halhal8, name: "Swarovski Halhal", price: "312.90", category: "Halhal" },
    { id: 49, image: halhal9, name: "Renkli Pastel Halhal", price: "980.90", category: "Halhal" },
    { id: 50, image: halhal10, name: "Charlie's Angel Halhal", price: "460.90", category: "Halhal" },
  ];

  const categories = ["Tümü", "Bileklik", "Kolye", "Küpe", "Yüzük", "Halhal"];

  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedCategory === "Tümü" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Header
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
      />

      <Routes>
      <Route
  path="/"
  element={
    <>
      {/* ÜSTTE TAM EKRAN VİDEO */}
      <HeroVideo />

      {/* AŞAĞIDA ÜRÜNLER */}
      <section id="products" className="products-section">
        <div style={{ padding: "2rem" }}>
          {/* Kategori + Arama */}
          <div
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  backgroundColor:
                    selectedCategory === category ? "#e91e63" : "#f8bbd0",
                  color: "#fff",
                  borderRadius: "1rem",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s",
                }}
              >
                {category}
              </button>
            ))}

            

            {/* Arama Kutusu */}
            <div
              style={{
                position: "relative",
                flex: "1",
                maxWidth: "250px",
                marginLeft: "auto",
                marginRight: "2rem",
              }}
            >
              <MdOutlineSavedSearch
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#e91e63",
                  fontSize: "1.2rem",
                }}
              />
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: "0.5rem 0.5rem 0.5rem 2rem",
                  borderRadius: "1rem",
                  border: "1px solid #e91e63",
                  outline: "none",
                  fontSize: "1rem",
                  width: "100%",
                }}
              />
            </div>
          </div>

          {/* Ürünler */}
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                onAddToCart={() =>
                  handleAddToCart({
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  }
/>


        {/* Sepet Sayfası */}
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          }
        />

        {/* Ürün Detay Sayfası */}
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              products={allProducts}
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* ✅ Ödeme Sayfası */}
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} />}
        />

      </Routes>
    </Router>
  );
}



export default App;















