import React, { useState, useEffect, useRef } from "react";
import {
  Box, Typography, Badge, IconButton, ClickAwayListener,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo3.png";
import { PiBasketThin } from "react-icons/pi";
import { FcEmptyTrash } from "react-icons/fc";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function Header({ cart, onRemoveFromCart, onIncrease, onDecrease }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleCart = () => setOpen((s) => !s);
  const closeCart = () => setOpen(false);

  const brand = "#e91e63";
  const brandDark = "#ad1457";
  const brandLight = "rgba(255,240,245,0.9)";
  const transparentDark = "rgba(0,0,0,0.25)";

  const isSolid =
    ["/cart", "/checkout"].some((p) => location.pathname.startsWith(p)) ||
    location.pathname.startsWith("/product/") ||
    scrolled;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, left: 0, width: "100%", height: "70px",
        zIndex: 1000,
        background: isSolid ? brandLight : transparentDark,
        color: isSolid ? brandDark : "#fff",
        backdropFilter: isSolid ? "none" : "saturate(120%) blur(2px)",
        boxShadow: isSolid ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* İç container */}
      <Box
        sx={{
          maxWidth: 1200, mx: "auto", px: 2, height: "100%",
          display: "grid", gridTemplateColumns: "auto 1fr auto",
          alignItems: "center", gap: 2,
        }}
      >
        {/* Sol: Logo + PinkCard */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: 50, mr: 1.5 }} />
          <Typography variant="h6" fontWeight="bold" sx={{ color: "inherit" }}>
            PinkCard
          </Typography>
        </Link>

        {/* Orta: Pink Koleksiyon */}
<Box sx={{ justifySelf: "center", transform: "translateX(-60px)" }}>
  <Link to="/" style={{ textDecoration: "none" }}>
    <Typography
      variant="h6"
      sx={{
        fontStyle: "italic",
        fontWeight: "bold",
        color: "inherit",
        transition: "all .25s",
        "&:hover": {
          color: isSolid ? brand : "#fff",
          borderBottom: `2px solid ${isSolid ? brand : "#fff"}`,
        },
      }}
    >
      Pink Koleksiyon
    </Typography>
  </Link>
</Box>


        {/* Sağ: Sepet */}
        <Box sx={{ justifySelf: "end", position: "relative" }} ref={ref}>
          <ClickAwayListener onClickAway={closeCart}>
            <Box sx={{ position: "relative" }}>
              <Badge
                badgeContent={cart.reduce((s, i) => s + i.quantity, 0)}
                color="secondary"
                onClick={toggleCart}
                sx={{ cursor: "pointer" }}
              >
                <PiBasketThin size={28} color={isSolid ? "#333" : "#fff"} />
              </Badge>

              {open && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "110%",
                    right: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    borderRadius: 2,
                    p: 2,
                    minWidth: 280,
                    maxWidth: "calc(100vw - 20px)",
                    zIndex: 2000,
                  }}
                >
                  {cart.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">Sepet boş</Typography>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <Box key={item.id} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            sx={{ width: 44, height: 44, mr: 1, borderRadius: 1, objectFit: "cover" }}
                          />
                          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography variant="body2" noWrap title={item.name}>{item.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              {item.price} TL x {item.quantity}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                              <IconButton size="small" onClick={() => onDecrease(item.id)}><IoMdRemove /></IconButton>
                              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                              <IconButton size="small" onClick={() => onIncrease(item.id)}><IoMdAdd /></IconButton>
                            </Box>
                          </Box>
                          <IconButton onClick={() => onRemoveFromCart(item.id)} size="small" sx={{ ml: 1 }}>
                            <FcEmptyTrash size={18} />
                          </IconButton>
                        </Box>
                      ))}

                      <Box sx={{ borderTop: "1px solid #eee", pt: 1, mt: 1 }}>
                        <Typography variant="body2" fontWeight="bold">
                          Toplam: {cart.reduce((t, i) => t + parseFloat(i.price) * i.quantity, 0).toFixed(2)} TL
                        </Typography>
                        <Link to="/cart" onClick={closeCart} style={{ textDecoration: "none" }}>
                          <Box
                            sx={{
                              mt: 1,
                              backgroundColor: brand,
                              color: "#fff",
                              fontWeight: "bold",
                              textAlign: "center",
                              borderRadius: 1,
                              py: 1,
                              transition: "all .25s",
                              "&:hover": { backgroundColor: "#c2185b" },
                            }}
                          >
                            Sepete Git
                          </Box>
                        </Link>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </Box>
          </ClickAwayListener>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;


























