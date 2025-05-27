import React from "react";
import CartWidget from "./CartWidget";
import logo from "../logo.png";

const categories = ["Electronica", "Ropa Dama", "Joyeria", "Ropa Caballero"];

const NavBar = () => (
  <nav
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      background: "#f5f5f5",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
      <span style={{ fontWeight: "bold", fontSize: 24 }}>
        Mercado Calidad Mexico
      </span>
    </div>

    <div style={{ minWidth: 200 }}></div>
    <CartWidget />
  </nav>
);

export const CategoriesBar = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#fff",
      padding: "0.5rem 0 0.5rem 2.5rem",
      fontSize: 18,
      fontWeight: 500,
      gap: "2.5rem",
    }}
  >
    {categories.map((cat) => (
      <span key={cat}>{cat}</span>
    ))}
  </div>
);

export default NavBar;
