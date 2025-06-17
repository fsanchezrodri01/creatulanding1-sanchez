import { useEffect, useState, useCallback } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ContainerItemList() {
  const [prod, setProd] = useState([]);
  const { catName } = useParams();

  async function callJson(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      alert(`error de conexion ${err}`);
    }
  }
  const getProd = useCallback(async () => {
    if (catName) {
      const filter = await callJson(
        `https://dummyjson.com/products/category/${catName}`
      );
      setProd(filter.products);
    } else {
      const all = await callJson(`https://dummyjson.com/products`);
      setProd(all.products);
    }
  }, [catName]);
  useEffect(() => {
    getProd();
  }, [getProd]);

  return <ItemList products={prod} />;
}

export default ContainerItemList;
