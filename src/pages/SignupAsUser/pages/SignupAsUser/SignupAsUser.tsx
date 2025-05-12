import { useRoleStore } from "../../../../stores/roleStore";
import OAuthButtonsList from "../../components/OAuthButtonsList/OAuthButtonsList";
import { LogoHeader } from "../../components/LogoHeader/LogoHeader";
import styles from './SignupAsUser.module.css';
import SignupForm from "../../components/SignupForm/SignupForm";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          onClick={() => !isClient && toggleRole()}
          aria-label="Toggle role"
        >
          Register as Customer
        </button>
        <button
          className={`${styles.registerButton} ${
            !isClient ? "activeRole" : ""
          }`}
          onClick={() => isClient && toggleRole()}
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
        <Link to='/sign-in' className={styles.loginLink}>
          Register
        </Link>
      </div>
    </section>
  );
}
