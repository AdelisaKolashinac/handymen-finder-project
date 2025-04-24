import { useState } from "react";
import styles from "./Navbar.module.css";
import { Hamburger } from "./Hamburger";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className="logo">
          <img src="./homepage/logo.png" alt="Logo" />
        </div>
        <button className={styles.menu} onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src="./homepage/Close.png" alt="Close Menubar" />
          ) : (
            <img src="./homepage/menu.png" alt="Open Menu bar" />
          )}
        </button>
      </nav>
      {isMenuOpen && <Hamburger />}
    </>
  );
}
