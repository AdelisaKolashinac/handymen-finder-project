import { useRoleStore } from "../../stores/roleStore";
import OAuthButtonsList from "./OAuthButtonsList";
import { LogoHeader } from "./components/LogoHeader";
import styles from "./SignupAsUser.module.css";
import SignupForm from "./SignupForm";
import { useState } from "react";

export default function SignupAsUser() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const { isClient, toggleRole } = useRoleStore();

  return (
    <section className="wrapper">
      {/* Logo Header Section */}
      <LogoHeader />

      {/* Register as Customer and Craftsman Buttons */}
      <div className={` border-bottom ${styles.registerButtons}`}>
        <button
          className={`${styles.registerButton} ${isClient ? "activeRole" : ""}`}
          onClick={toggleRole}
          aria-label="Toggle role"
        >
          Register as Customer
        </button>
        <button
          className={`${styles.registerButton} ${isClient ? "" : "activeRole"}`}
          onClick={toggleRole}
          aria-label="Toggle role"
        >
          Register as Craftsman
        </button>
      </div>

      {/* Toggle between OAuthButtonsList and SignupForm */}
      {showSignupForm ? (
        <SignupForm />
      ) : (
        <OAuthButtonsList toogleSignupForm={setShowSignupForm} />
      )}

      {/* Login Redirect Link */}
      <div className={styles.loginRedirect}>
        <p className={styles.loginText}>Already an account?</p>
        <a href="#" className={styles.loginLink}>
          Register
        </a>
      </div>
    </section>
  );
}
