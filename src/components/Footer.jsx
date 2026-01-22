import { FaInfoCircle, FaEnvelope, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Loja Virtual. Todos os direitos reservados.</p>
        <nav className="footer-links">
          <a href="/sobre"><FaInfoCircle className="icon" /> Sobre nós</a>
          <a href="/contato"><FaEnvelope className="icon" /> Contato</a>
          <a href="/politica"><FaShieldAlt className="icon" /> Política de Privacidade</a>
        </nav>
      </div>
    </footer>
  );
}
