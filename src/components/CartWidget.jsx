import React from "react";

const CartWidget = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span role="img" aria-label="cart" style={{ fontSize: 24, marginRight: 6 }}>
      🛒
    </span>
    <span style={{ fontWeight: "bold" }}>4</span>
  </div>
);

export default CartWidget;
