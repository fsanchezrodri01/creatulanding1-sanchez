import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContainerItemList from "./components/ContainerItemList/ItemListContainer";
import ContainerItemDetail from "./components/ContainerItemDetail/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      {/* Sidebar for categories can be added here if needed */}
      <div style={{ flex: 1 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContainerItemList />} />
          <Route path="/category/:catName" element={<ContainerItemList />} />
          <Route path="/item/:itemId" element={<ContainerItemDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
