import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../firebase/db";

function ContainerItemDetail() {
  const [prod, setProd] = useState();
  const { itemId } = useParams();

  const callJson = async (url) => {
    try {
      const resp = await fetch(`${url}`);
      const data = await resp.json();
      return data;
    } catch (err) {
      console.log(`se encontro el siguiene error ${err}`);
    }
  };
  const getItems = useCallback(async () => {
    const data = await callJson(`https://dummyjson.com/products/${itemId}`);
    setProd(data);
    console.log("test-db");
    getProducts();
  }, [itemId]);
  useEffect(() => {
    getItems();
  }, [getItems]);

  // uso un spinner de bs para cargar los items si aun prod esta vacio
  return (
    <>
      {prod ? (
        <ItemDetail prod={prod} />
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ContainerItemDetail;
