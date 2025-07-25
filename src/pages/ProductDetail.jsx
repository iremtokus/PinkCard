import React from "react";
import { useParams } from "react-router-dom";
import { FaTruck, FaHandHoldingHeart } from "react-icons/fa";

function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Ürün bulunamadı.</p>;

  return (
    <div style={{ padding: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {/* Ürün Görseli */}
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "350px", borderRadius: "1rem" }}
      />

      {/* Ürün Bilgileri */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "1rem" }}>
          {product.name}
        </h2>

        <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          {product.price} TL
        </p>

        <button
          onClick={() => onAddToCart(product)}
          style={{
            backgroundColor: "#e91e63",
            color: "#fff",
            padding: "0.75rem 2rem",
            borderRadius: "1.5rem",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          SEPETE EKLE
        </button>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaTruck color="#e91e63" />
            <span>Ücretsiz Kargo</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaHandHoldingHeart color="#e91e63" />
            <span>El Yapımı</span>
          </div>
        </div>

        {/* Açıklama */}
        <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          Bu ürün el yapımıdır. Günlük kullanım için uygundur. Parfüm ve suyla temasından kaçınılması tavsiye edilir.
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
