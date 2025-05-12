import { Link } from "react-router-dom";
import styles from "./SigninAsUser.module.css";
import { Button } from "../../../../components/Button/Button";
import { OAuthButton } from "../../components/OAuthButton/OAuthButton";
import React, { useState } from "react";
import { useUserStore } from "../../../../stores/userStore";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";

export default function SigninAsUser() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const setUser = useUserStore((state) => state.setUser);
  const { navigate } = useAppNavigation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${formData.email}`
      );
      const users = await res.json();

      if (users.length === 0) {
        setError("No user found with this email");
        return;
      }

      const user = users[0];

      if (user.password !== formData.password) {
        setError("Incorrect password");
        return;
      }

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/client-home");
    } catch (err) {
      console.error("Signin error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`wrapper ${styles.signin}`}>
      <header>
        <Link to="/signup">
          <img
            src="/arrows&location/arrow-left.png"
            alt="Go back to signup/register"
          />
        </Link>
        <h2 className={styles.signin__heading}>Welcome back</h2>
        <p className={styles.signin__subheading}>Register with your account</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div className={styles.signin__inputGroup}>
          <div className={styles.signin__inputIcon}>
            <img src="/signupAsUser/input-mail-icon.png" alt="Email icon" />
          </div>
          <input
            type="email"
            className={styles.signin__input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e-mail"
          />
        </div>
        <div className={styles.signin__inputGroup}>
          <div className={styles.signin__inputIcon}>
            <img src="/signupAsUser/input-lock-icon.png" alt="Password icon" />
          </div>
          <input
            type="password"
            className={styles.signin__input}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />
          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.signin__inputIcon__secondary}>
            <img src="/signupAsUser/not-visible-icon.png" alt="Password icon" />
          </div>
        </div>
        <a href="#" className={styles.signin__forgotPassword}>
          Forgot password?
        </a>
        <div className={styles.signin__button}>
          <Button>Sign in</Button>
        </div>
      </form>
      <span className={styles.signin__orText}>Or</span>
      <div className={styles.signin__oauthButtonsContainer}>
        <OAuthButton
          iconSrc="/signupAsUser/google-icon.png"
          iconAlt="Google logo"
        >
          Go on with Google
        </OAuthButton>
        <OAuthButton
          iconSrc="/signupAsUser/facebook-icon.png"
          iconAlt="Facebook logo"
        >
          Go on with Facebook
        </OAuthButton>
        <OAuthButton
          iconSrc="/signupAsUser/apple-icon.png"
          iconAlt="Apple logo"
        >
          Go on with Apple
        </OAuthButton>
      </div>
    </div>
  );
}
