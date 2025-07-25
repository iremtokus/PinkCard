import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, name, price, onAddToCart }) {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card
      sx={{
        width: 220,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(243, 174, 200, 0.5)",
        },
        border: "1px solid #f8bbd0",
        borderRadius: 3,
        backgroundColor: "#fff0f5",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{ objectFit: "cover", borderRadius: "12px 12px 0 0" }}
        onClick={goToDetailPage}
      />
      <CardContent onClick={goToDetailPage}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#880e4f",
            fontSize: "1rem",
          }}
        >
          {name}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mb: 1, color: "#ad1457", fontSize: "0.95rem" }}
        >
          {price} TL
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        size="small"
        fullWidth
        onClick={onAddToCart}
        sx={{
          backgroundColor: "#d81b60",
          "&:hover": {
            backgroundColor: "#ad1457",
          },
          fontWeight: "bold",
          fontSize: "0.8rem",
          borderRadius: 2,
        }}
      >
        SEPETE EKLE
      </Button>
    </Card>
  );
}

export default ProductCard;








