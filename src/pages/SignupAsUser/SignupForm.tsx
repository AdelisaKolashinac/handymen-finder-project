import React, { useState } from "react";
import { useUserStore } from "../../stores/userStore";
import styles from "./SignupAsUser.module.css";
import { Button } from "../../components/Button/Button";
import { UserType } from "../../types/types";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    type: "",
    location: "",
  });
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser: UserType = {
      fullname: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      phone: formData.phone,
      type: "CLIENT",
      location: "Berlin",
    };
    setUser(newUser);

    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Signup successful!");

    navigate("/client-home");
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
            onChange={(e) => handleChange("name", e.target.value)}
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
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/signupAsUser/input-lock-icon.png" alt="Password icon" />
          </div>
          <input
            type="password"
            placeholder="password"
            name="password"
            className={styles.registerForm__inputField}
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />

          <div className={styles.registerForm__icon__secondary}>
            <img src="/signupAsUser/not-visible-icon.png" alt="Password icon" />
          </div>
        </div>

        <div className={styles.registerForm__input}>
          <div className={styles.registerForm__icon}>
            <img src="/signupAsUser/input-lock-icon.png" alt="Password icon" />
          </div>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirm-password"
            className={styles.registerForm__inputField}
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
          />
          <div className={styles.registerForm__icon__secondary}>
            <img src="/signupAsUser/not-visible-icon.png" alt="Password icon" />
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
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
}
