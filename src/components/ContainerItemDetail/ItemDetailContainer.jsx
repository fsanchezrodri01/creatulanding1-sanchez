import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/db";
import ItemDetail from "./ItemDetail";

function ContainerItemDetail() {
  const [prod, setProd] = useState();
  const { itemId } = useParams();

  const getItem = useCallback(async () => {
    const data = await getProduct(itemId);
    setProd(data);
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
