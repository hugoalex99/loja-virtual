import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">R$ {product.price}</p>
      <div className="product-actions">
        <Link to={`/produto/${product.id}`} className="details-link">
          <FaEye className="icon" /> Detalhes
        </Link>
        <button onClick={() => addToCart(product)}>
          <FaShoppingCart className="icon" /> Adicionar
        </button>
      </div>
    </div>
  );
}
