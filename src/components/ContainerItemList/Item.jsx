import "./Item.scss";
import { Link } from "react-router-dom";
function Item({ prod }) {
  return (
    <div className="item__card">
      <img className="item__image" src={prod.thumbnail} alt={prod.title} />
      <div className="item__cont p-2">
        <p className="item__title">{prod.title}</p>
        <p className="item__descrip">{prod.description}</p>
        <p className="item__price">$ {prod.price}</p>
        <p>Stock: {prod.stock}</p>
        <Link to={`/item/${prod.id}`} className="item__btn">
          Ver mas
        </Link>
      </div>
    </div>
  );
}
export default Item;
