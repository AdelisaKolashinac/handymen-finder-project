import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <NavLink
        to="/bookings"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src="/clientApp/navigation/bookings-icon.png" alt="Bookings" />
        <span>Bookings</span>
      </NavLink>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src="/clientApp/navigation/categories-icon.png" alt="Categories" />
        <span>Categories</span>
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src="/clientApp/navigation/home-icon.png" alt="Home" />
        <span>Homepage</span>
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src="/clientApp/navigation/chat-icon.png" alt="Chat" />
        <span>Chat</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src="/input-user-icon.png" alt="Profile" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}
