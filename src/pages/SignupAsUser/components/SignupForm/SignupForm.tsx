import React, { useState } from "react";
import { useUserStore } from "../../../../stores/userStore";
import styles from "./SignupForm.module.css";
import { Button } from "../../../../components/Button/Button";
import { User } from "../../../../types/types";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
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

    // password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const firebaseUser = userCredential.user;

      await updateProfile(firebaseUser, { displayName: formData.name });

      // Add new user
      const newUser: User = {
        id: firebaseUser.uid,
        fullname: formData.name,
        email: formData.email,
        phone: formData.phone,
        type: "CLIENT",
        location: "Berlin",
        provider: "EMAIL",
      };

      await setDoc(doc(db, "users", firebaseUser.uid), newUser);

      setUser(newUser);

      navigate("/client-home");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setError("User already exists with this email");
      } else {
        console.error("Signup error: ", error);
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.registerForm_inputItems}>
        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/icons/input-user-icon.png" alt="icon" />
          </div>
          <input
            type="text"
            placeholder="name"
            name="name"
            className={styles.registerForm__inputField}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/signupAsUser/input-mail-icon.png" alt="Email icon" />
          </div>
          <input
            type="email"
            placeholder="e-mail"
            name="email"
            className={styles.registerForm__inputField}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/signupAsUser/input-lock-icon.png" alt="Password icon" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className={styles.registerForm__inputField}
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div
            className={styles.registerForm__icon__secondary}
            onClick={() => setShowPassword((prev) => !prev)
            }
          >
            {showPassword ? (
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
          </div>
        </div>

        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/signupAsUser/input-lock-icon.png" alt="Password icon" />
          </div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            name="confirmPassword"
            className={styles.registerForm__inputField}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div
            className={styles.registerForm__icon__secondary}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? (
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
          </div>
        </div>

        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/signupAsUser/input-phone-icon.png" alt="Phone icon" />
          </div>
          <input
            type="text"
            placeholder="Telephone number"
            name="phone"
            className={styles.registerForm__inputField}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="errorMessage">{error}</p>}
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
}
