import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { FcEmptyTrash } from "react-icons/fc";
import { useNavigate } from "react-router-dom"; 

function CartPage({ cart, onAdd, onRemove, onDecrease }) {
  const navigate = useNavigate(); 

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <Box sx={{ padding: 4, marginTop: "80px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Sepetim
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Sepetiniz boş.</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
                p: 2,
                border: "1px solid #eee",
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 60, height: 60, mr: 2, borderRadius: 1 }}
                />
                <Box>
                  <Typography>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price} TL x {item.quantity}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => onDecrease(item.id)}
                  disabled={item.quantity <= 1}
                  sx={{
                    color: "#e91e63",
                    borderColor: "#e91e63",
                    minWidth: 36,
                    "&:hover": {
                      backgroundColor: "#fce4ec",
                      borderColor: "#d81b60",
                    },
                  }}
                >
                  -
                </Button>
                <Typography>{item.quantity}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => onAdd(item)}
                  sx={{
                    color: "#e91e63",
                    borderColor: "#e91e63",
                    minWidth: 36,
                    "&:hover": {
                      backgroundColor: "#fce4ec",
                      borderColor: "#d81b60",
                    },
                  }}
                >
                  +
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onRemove(item.id)}
                  sx={{
                    borderColor: "#e91e63",
                    color: "#e91e63",
                    "&:hover": {
                      backgroundColor: "#fce4ec",
                      borderColor: "#d81b60",
                    },
                  }}
                >
                  <FcEmptyTrash />
                </Button>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">
            Toplam Tutar: <strong>{total.toFixed(2)} TL</strong>
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#e91e63",
              "&:hover": { backgroundColor: "#c2185b" },
              fontWeight: "bold",
            }}
            onClick={() => navigate("/checkout")} 
          >
            ALIŞVERİŞİ TAMAMLA
          </Button>
        </>
      )}
    </Box>
  );
}

export default CartPage;



