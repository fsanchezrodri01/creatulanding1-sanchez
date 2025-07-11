import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../firebase/db";

function ContainerItemDetail() {
  const [prod, setProd] = useState();
  const { itemId } = useParams();

  const getItem = useCallback(async () => {
    const products = await getProducts();
    const found = products.find((item) => item.id === itemId);
    setProd(found);
  }, [itemId]);

  useEffect(() => {
    getItem();
  }, [getItem]);

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
