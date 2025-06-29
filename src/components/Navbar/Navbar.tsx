import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Hamburger } from "./Hamburger";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src="./homepage/company-logo.png" alt="Website Logo" />
        </Link>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src="/homepage/close-icon.png" alt="Close Navigation Menu" />
          ) : (
            <img src="/homepage/menu-icon.png" alt="Open Navigation Menu" />
          )}
        </button>
      </nav>
      {isMenuOpen && <Hamburger setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
}
