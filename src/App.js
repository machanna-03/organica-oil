// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import AllProducts from "./componants/pages/innerpages.js/AllProducts";
import HomePage from "./componants/pages/HomePage";
import { ThemeProvider } from "./componants/common/ThemeContext";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import DetailPage from "./componants/pages/innerpages.js/DetailPage";
import PrivacyPolicy from "./componants/pages/innerpages.js/PrivacyPolicy";
import TermsandConditions from "./componants/pages/innerpages.js/TermsandConditions";
import RefundPolicy from "./componants/pages/innerpages.js/RefundPolicy";
import ShippingPolicy from "./componants/pages/innerpages.js/ShippingPolicy";
import ContactUs from "./componants/pages/ContactUs";
import AboutUs from "./componants/pages/AboutUs";
import BlogList from "./componants/pages/Blog";
import YagyasAndHomas from "./componants/pages/innerpages.js/YagyasAndHomas";
import Pujas from "./componants/pages/innerpages.js/Pujas";
import DonateNow from "./componants/pages/innerpages.js/DonateNow";
import Account from "./componants/pages/innerpages.js/Account";
import Addreses from "./componants/pages/innerpages.js/Addreses";
import ProtectedRoute from "./page-restriction/ProtectedRoute";
import PaymentPage from "./componants/pages/PaymentPage";

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections/:products" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:ogUrl" element={<DetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsandConditions />}
            />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/yagyas-homas" element={<YagyasAndHomas />} />
            <Route path="/gau-pooja" element={<Pujas />} />
            <Route path="/donate-now" element={<DonateNow />} />
            <Route path="/account" element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />
            <Route path="/account/addresses" element={
              <ProtectedRoute>
                <Addreses />
              </ProtectedRoute>
            } />
            <Route path="/account/payment" element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
