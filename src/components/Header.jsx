import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Badge,
  IconButton,
  ClickAwayListener,
} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { PiBasketThin } from 'react-icons/pi';
import { FcEmptyTrash } from 'react-icons/fc';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

function Header({ cart, onRemoveFromCart, onIncrease, onDecrease }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleCart = () => setOpen(!open);
  const closeCart = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#fff0f5',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '70px',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        }}
      >
        {/* Sol: Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: 50, height: 'auto', marginRight: 1.5 }}
          />
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#ad1457' }}>
            PinkCard
          </Typography>
        </Link>

        {/* Orta: Başlık */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', ml: -12 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: '#ad1457',
                transition: 'all 0.3s ease',
                "&:hover": {
                  color: '#ec407a',
                  borderBottom: '2px solid #ec407a',
                },
              }}
            >
              Pink Koleksiyon
            </Typography>
          </Link>
        </Box>

        {/* Sepet */}
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 24,
            zIndex: 1500,
          }}
          ref={ref}
        >
          <ClickAwayListener onClickAway={closeCart}>
            <Box sx={{ position: 'relative' }}>
              <Badge
                badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)}
                color="secondary"
                onClick={toggleCart}
                sx={{ cursor: 'pointer' }}
              >
                <PiBasketThin size={28} color="#555" />
              </Badge>

              {open && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    borderRadius: 2,
                    padding: 2,
                    minWidth: 270,
                    zIndex: 2000,
                  }}
                >
                  {cart.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                      Sepet boş
                    </Typography>
                  ) : (
                    <>
                      {cart.map((item, index) => (
                        <Box
                          key={index}
                          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{ width: 40, height: 40, mr: 1, borderRadius: 1 }}
                          />
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body2">{item.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              {item.price} TL x {item.quantity}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                              <IconButton size="small" onClick={() => onDecrease(item.id)}>
                                <IoMdRemove />
                              </IconButton>
                              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                              <IconButton size="small" onClick={() => onIncrease(item.id)}>
                                <IoMdAdd />
                              </IconButton>
                            </Box>
                          </Box>
                          <IconButton
                            onClick={() => onRemoveFromCart(item.id)}
                            size="small"
                            sx={{ ml: 1 }}
                          >
                            <FcEmptyTrash size={18} />
                          </IconButton>
                        </Box>
                      ))}

                      <Box sx={{ borderTop: '1px solid #eee', pt: 1, mt: 1 }}>
                        <Typography variant="body2" fontWeight="bold">
                          Toplam:{" "}
                          {cart
                            .reduce(
                              (total, item) =>
                                total + parseFloat(item.price) * item.quantity,
                              0
                            )
                            .toFixed(2)}{" "}
                          TL
                        </Typography>

                        <Link to="/cart" onClick={closeCart} style={{ textDecoration: 'none' }}>
                          <Box
                            sx={{
                              mt: 1,
                              backgroundColor: '#e91e63',
                              color: '#fff',
                              fontWeight: 'bold',
                              textAlign: 'center',
                              borderRadius: 1,
                              py: 1,
                              transition: 'all 0.3s',
                              "&:hover": {
                                backgroundColor: '#c2185b',
                              },
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
    </>
  );
}

export default Header;























