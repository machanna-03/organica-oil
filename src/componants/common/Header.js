import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { useNavigate } from "react-router-dom";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";



const Header = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // mobile check

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const announcements = [
  "We’re not just selling organica products.",
  ` ${isMobile ? "India’s Comeback to Clean Living." : "We’re helping India return to a healthier. Join the comeback chemical-free life. Join the comeback."}`,
];
  return (
    <Box sx={{ background: "#1e2813", color: "#fff" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "35px",
          letterSpacing:'.1rem',
        }}
      >
        {/* Left Text (Hidden on Mobile) */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: { sm: "13px", md: "15px" },
                fontWeight: 600,
              }}
            >
              100% Organica Products
            </Typography>
          </Box>
        )}

        {/* Announcements */}
        <Box sx={{display:'flex',justifyContent:'center', textAlign: "center", flex: 1 }}>
          <SwipeableViews index={index} disabled>
            {announcements.map((text, i) => (
              <Box
                key={i}
                role="region"
                aria-label={`Announcement ${i + 1} of ${announcements.length}`}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "14px", sm: "15px", md: "15px" },
                    fontFamily: "var(--font-heading-family)",
                    textAlign: "center",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </SwipeableViews>
        </Box>

        {/* Donate Now Button/Icon */}
         
        {!isMobile && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "15px",
                fontFamily: "var(--font-heading-family)",
                "&:hover": {
                  background: "transparent",
                },
              }}
              onClick={() => navigate("/donate-now")}
              startIcon={
                <VolunteerActivismIcon
                  sx={{ color: "white", fontSize: "18px" }}
                />
              }
            >
              Donate Now
            </Button>
        </Box>
        )}
      </Container>
    </Box>
  );
};

export default Header;
