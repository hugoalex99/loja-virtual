import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
// Ícones
import { FaStore, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [theme, setTheme] = useState("light");

  // Aplica o tema no <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      {/* Lado esquerdo */}
      <div className="navbar-left">
        <FaStore className="icon" aria-label="Loja" />
        <Link to="/">Loja Virtual</Link>
      </div>

      {/* Lado direito */}
      <div className="navbar-right">
        <Link to="/carrinho" className="cart-link">
          <FaShoppingCart className="icon" aria-label="Carrinho" />
          Carrinho ({cart.length})
        </Link>

        {/* Botão de tema */}
        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Alternar tema"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}
