import { Button } from "../../components/Button/Button";
import { useRoleContext } from "../../context/Context";
// import OAuthButtonsList from "./OAuthButtonsList";
import { LogoHeader } from "./components/LogoHeader";
import styles from "./SignupAsUser.module.css";
import SignupForm from "./SignupForm";

export default function SignupAsUser() {
  const { isClient, handleSwitch } = useRoleContext();

  return (
    <section>
      <LogoHeader />
      <div className="wrapper">
        {/* Logo Header Section */}

        {/* Register as Customer and Craftsman Buttons */}
        <div className={` border-bottom ${styles.registerButtons}`}>
          <button
            className={`${styles.registerButton} ${
              isClient ? "activeRole" : ""
            }`}
            onClick={handleSwitch}
            aria-label="Toggle role"
          >
            Register as Customer
          </button>
          <button
            className={`${styles.registerButton} ${
              isClient ? "" : "activeRole"
            }`}
            onClick={handleSwitch}
            aria-label="Toggle role"
          >
            Register as Craftsman
          </button>
        </div>
        {/* <OAuthButtonsList /> */}
        <SignupForm />  
        <Button>Register</Button>

        {/* Login Redirect Link */}
        <div className={styles.loginRedirect}>
          <p className={styles.loginText}>Already an account?</p>
          <a href="#" className={styles.loginLink}>
            Register
          </a>
        </div>
      </div>
    </section>
  );
}
