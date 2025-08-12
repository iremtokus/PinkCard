import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Divider,
  Button,
} from "@mui/material";

function CheckoutPage({ cart }) {
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#e91e63",
        boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.3)",
      },
    },
    "& label.Mui-focused": {
      color: "#e91e63",
    },
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );


  const handleOrderSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !address ||
      !cardName ||
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      !agreed
    ) {
      setError("Lütfen tüm alanları doldurun ve sözleşmeyi onaylayın.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Geçerli bir e-posta adresi girin.");
      return;
    }

    if (!cardNumberRegex.test(cardNumber)) {
      setError("Kart numarası 16 haneli olmalıdır.");
      return;
    }

    if (!cvvRegex.test(cvv)) {
      setError("CVV 3 haneli olmalıdır.");
      return;
    }

    if (!expiryRegex.test(expiryDate)) {
      setError("Son kullanma tarihi MM/YY formatında olmalıdır.");
      return;
    }

    const [month, year] = expiryDate.split("/").map(Number);
    const now = new Date();
    const currentYear = Number(now.getFullYear().toString().slice(-2));
    const currentMonth = now.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setError("Kart son kullanma tarihi geçmiş olamaz.");
      return;
    }

    setError("");
    alert("Siparişiniz başarıyla oluşturuldu 💌");
  };

  return (
    <Box sx={{ padding: 4, marginTop: "80px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* İndirim Kodu */}
          <Typography variant="h6" gutterBottom>
            İndirim Kodu
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            <TextField fullWidth placeholder="İndirim kodu ekle" sx={inputStyles} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e91e63",
                color: "#fff",
                "&:hover": { backgroundColor: "#c2185b" },
              }}
            >
              Uygula
            </Button>
          </Box>

          {/* Adres Bilgileri */}
          <Typography variant="h6" gutterBottom>
            1. Adres
          </Typography>

          <TextField
            fullWidth
            label="E-Posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ ...inputStyles, mb: 2 }}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ad"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Soyad"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Apartman, daire vb." sx={inputStyles} />
            </Grid>
          </Grid>

          {/* Ödeme Bilgileri */}
          <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
            2. Ödeme
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Kart Üzerindeki İsim"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Kart Numarası"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                label="Son Kullanma Tarihi"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                label="CVV"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                sx={inputStyles}
              />
            </Grid>
          </Grid>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Box sx={{ mt: 3 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  sx={{
                    color: "#e91e63",
                    "&.Mui-checked": { color: "#e91e63" },
                  }}
                />
              }
              label={
                <span>
                  <strong>Gizlilik Sözleşmesini</strong> ve{" "}
                  <strong>Satış Sözleşmesini</strong> okudum, onaylıyorum.
                </span>
              }
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#e91e63",
              "&:hover": { backgroundColor: "#c2185b" },
            }}
            onClick={handleOrderSubmit}
          >
            Siparişi Onayla
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #eee",
              borderRadius: 2,
              padding: 3,
              backgroundColor: "#fafafa",
            }}
          >
            {cart.map((item) => (
              <Box
                key={item.id}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 60, height: 60, marginRight: 10 }}
                />
                <Box>
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography variant="body2">
                    {item.price} TL x {item.quantity}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1">Ara Toplam</Typography>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {total.toFixed(2)} ₺
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutPage;







