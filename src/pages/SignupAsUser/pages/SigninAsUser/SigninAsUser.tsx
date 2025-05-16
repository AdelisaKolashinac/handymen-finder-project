import { Link, useNavigate } from "react-router-dom";
import styles from "./SigninAsUser.module.css";
import { Button } from "../../../../components/Button/Button";
import { OAuthButton } from "../../components/OAuthButton/OAuthButton";
import React, { useState } from "react";
import { useUserStore } from "../../../../stores/userStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup } from "../../../../lib/firebase";

export default function SigninAsUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const firebaseUser = userCredential.user;

      setUser({
        id: firebaseUser.uid,
        fullname: firebaseUser.displayName || "",
        email: firebaseUser.email || "",
        phone: "",
        type: "CLIENT",
        location: "Berlin",
      });

      navigate("/client-home");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        setError("Incorrect email or password");
      } else {
        setError("Something went wrong. Please try again.");
        console.error("Signin error:", error);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGooglePopup();
      const firebaseUser = result.user;

      setUser({
        id: firebaseUser.uid,
        fullname: firebaseUser.displayName || "",
        email: firebaseUser.email || "",
        phone: "",
        type: "CLIENT",
        location: "Berlin",
      });

      navigate("/client-home");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
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
            type={showPassword ? "text" : "password"}
            className={styles.signin__input}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />
          {error && <p className="errorMessage">{error}</p>}

          <div
            className={styles.signin__inputIcon__secondary}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
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
          onClick={handleGoogleSignIn}
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
