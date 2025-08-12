import React from "react";

export default function HeroVideo() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay">
        <div className="container hero-center">
          <h1>PinkCard</h1>
          <p>Yeni sezon ürünleri seni bekliyor</p>
          <a href="#products" className="scroll-btn">
            ↓ Aşağı Kaydır
          </a>
        </div>
      </div>
    </section>
  );
}
