import { useEffect, useState, useCallback } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../firebase/db";

function ContainerItemList() {
  const [prod, setProd] = useState([]);
  const { catName } = useParams();

  const getProd = useCallback(async () => {
    const products = await getProducts();
    // If you want to filter by category, do it here:
    if (catName) {
      // setProd(products.filter((item) => item.category === catName));
      getProductsByCategory(catName).then((products) => setProd(products));
    } else {
      setProd(products);
    }
  }, [catName]);

  useEffect(() => {
    getProd();
  }, [getProd]);

  return <ItemList products={prod} />;
}

export default ContainerItemList;
