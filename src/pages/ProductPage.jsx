import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="page-container">
        <Navbar />
        <main className="main-content">
          <h2>Produto não encontrado</h2>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="product-details">
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-image-large"
            />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">Preço: R$ {product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              <FaShoppingCart /> Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
