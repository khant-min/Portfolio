import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; {date} by Khant Min | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="/#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
