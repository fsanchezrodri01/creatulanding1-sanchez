import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../logo.png";

const categories = [
  { name: "Electronica", path: "tablets" },
  { name: "Ropa Dama", path: "womens-dresses" },
  { name: "Joyeria", path: "womens-jewellery" },
  { name: "Ropa Caballero", path: "mens-shirts" },
];

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
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
        <span style={{ fontWeight: "bold", fontSize: 24 }}>
          Mercado Calidad Mexico
        </span>
      </Link>
    </div>
    <div style={{ display: "flex", gap: "1.5rem" }}>
      {categories.map((cat) => (
        <Link
          key={cat.path}
          to={`/category/${cat.path}`}
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: 500,
          }}
        >
          {cat.name}
        </Link>
      ))}
    </div>
    <CartWidget />
  </nav>
);

export default NavBar;
