import React from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Link,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bgimg from "../../assets/footer-bg-update.png";

import { useNavigate } from "react-router-dom";

const footerLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Shipping Policy", path: "/shipping-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
  { label: "Terms of Service", path: "/terms-and-conditions" },
  { label: "Sitemap", path: "" },
];

const footerLinks1 = [
  { label: "Shop", path: "" },
  { label: "Track Your Order", path: "" },
  { label: "About Us", path: "/about-us" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact-us" },
];

const AccordionSection = ({ label, items, navigate }) => (
  <Accordion
    sx={{
      backgroundColor: "transparent",
      color: "white",
      boxShadow: "none",
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: "#D4B66A" }} />}
      aria-controls={`${label}-content`}
      id={`${label}-header`}
    >
      <Typography fontWeight="bold" sx={{ color: "#D4B66A" }}>
        {label}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      {items.map((item, index) => (
        <Typography
          key={index}
          onClick={() => navigate(item.path)}
          sx={{
            fontSize: 14,
            mb: 0.5,
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
            "&:hover": { color: "#D4B66A" },
          }}
        >
          {item.label}
        </Typography>
      ))}
    </AccordionDetails>
  </Accordion>
);

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#064D41" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: "none" } }}>
        <Typography
          sx={{
            fontSize: isMobile ? "1.35rem" : "36px",
            color: "#fff",
            py: 2,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <strong>Organica Oils</strong>
        </Typography>

        {isMobile ? (
          // ✅ MOBILE FOOTER
          <Box sx={{ backgroundColor: "#064D41", py: isMobile ? 0 : 2 }}>
            <AccordionSection
              label="SERVICES"
              items={footerLinks1}
              navigate={navigate}
            />
            <AccordionSection
              label="POLICIES"
              items={footerLinks}
              navigate={navigate}
            />
            <AccordionSection
              label="NEED HELP?"
              items={[{ label: "Contact Us", path: "/contact-us" }]}
              navigate={navigate}
            />

            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              sx={{ my: 3 }}
            >
              <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                <MailOutlineIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Box
              sx={{
                color: "#e6e4eb",
                fontSize: "1.3rem",
                letterSpacing: "0.06rem",
                mb: 2,
                textAlign: "center",
              }}
            >
              <Typography sx={{ mb: 0.5, fontSize: "16px" }}>
                <strong>Corporate Office:</strong> 25th Building, 1st Floor
              </Typography>
              <Typography sx={{ mb: 0.5, fontSize: "16px" }}>
                VijayaShree Layout, Kodichikknahalli
              </Typography>
              <Typography sx={{ mb: 3, fontSize: "16px" }}>
                Bangalore-560076{" "}
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px",
                mb: 3,
                textAlign: "center",
              }}
            >
              Grievance Redressal Officer:{" "}
              <Link href="#" underline="hover" sx={{ color: "#D4B66A" }}>
                Suyash Gupta
              </Link>
            </Typography>

            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography sx={{ fontWeight: "bold", mb: 1, color: "white" }}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Typography>
              <TextField
                placeholder="Email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              />
            </Box>

            {/* <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                textAlign: "center",
                mb: 1,
              }}
            >
              © Copyright © 2025, Anveshan Farm Technologies Pvt. Ltd.
            </Typography> */}
          </Box>
        ) : (
          // ✅ DESKTOP FOOTER (Unchanged)
          <Box
            component="footer"
            sx={{
              backgroundImage: `url(${bgimg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              color: "#fff",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              rowGap: 6,
            }}
          >
            {/* Left Section */}
            <Box sx={{ maxWidth: 350 }}>
              <Typography sx={{ mb: 0.5, fontSize: "16px" }}>
                <strong>Corporate Office:</strong> 25th Building, 1st Floor
              </Typography>
              <Typography sx={{ mb: 0.5, fontSize: "16px" }}>
                VijayaShree Layout, Kodichikknahalli
              </Typography>
              <Typography sx={{ mb: 3, fontSize: "16px" }}>
                Bangalore-560076{" "}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    color: "#d4b66a",
                    borderRadius: "50%",
                    p: 1.5,
                    mr: 2,
                  }}
                >
                  <PhoneIcon />
                </Box>
                <Typography sx={{ mb: 0.5, fontSize: "16px" }}>
                  <strong>Phone Number:</strong> +91 79754 68634
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    color: "#d4b66a",
                    borderRadius: "50%",
                    p: 1.5,
                    mr: 2,
                  }}
                >
                  <EmailIcon />
                </Box>
                <strong>Email:</strong> organicaoils@gmail.com
              </Box>
            </Box>

            {/* Services Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#D4B66A",
                  mb: 2,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                SERVICES
              </Typography>

              {footerLinks1.map((item, index) => (
                <Typography
                  key={index}
                  onClick={() => navigate(item.path)}
                  sx={{
                    fontSize: 16,
                    mb: 1,
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#D4B66A",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Policies Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#D4B66A",
                  mb: 2,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                POLICIES
              </Typography>

              {footerLinks.map((item, index) => (
                <Typography
                  key={index}
                  onClick={() => navigate(item.path)}
                  sx={{
                    fontSize: 16,
                    mb: 1,
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#D4B66A",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Help Section */}
            <Box>
              <Typography variant="h6" sx={{ color: "#D4B66A", mb: 2 }}>
                NEED HELP?
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D4B66A",
                  color: "#000",
                  borderRadius: "25px",
                  textTransform: "none",
                  px: 4,
                  mb: 3,
                  "&:hover": {
                    backgroundColor: "#c2a552",
                  },
                }}
              >
                Contact Us
              </Button>

              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                  <MailOutlineIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#D4B66A" }}>
                  <CloseIcon />
                </IconButton>
              </Stack>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Download App
              </Typography>
              <Stack direction="row" spacing={2}>
                <Box
                  component="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  sx={{ height: 40 }}
                />
                <Box
                  component="img"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  sx={{ height: 40 }}
                />
              </Stack>
            </Box>
          </Box>
        )}

        {/* Bottom copyright */}
        <Typography
          sx={{
            py: 2,
            fontSize: isMobile ? "14px" : "18px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          ©️ 2025 Organica Oils — A Registered Brand of Gouvandana
          Marketing. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
