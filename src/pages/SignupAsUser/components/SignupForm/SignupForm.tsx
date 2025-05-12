import React, { useState } from "react";
import { useUserStore } from "../../../../stores/userStore";
import styles from "./SignupForm.module.css";
import { Button } from "../../../../components/Button/Button";
import { UserType } from "../../../../types/types";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    type: "",
    location: "",
  });

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

    // password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      //  Check if user already exists by email
      const res = await fetch(
        `http://localhost:3001/users?email=${formData.email}`
      );
      const existingUsers = await res.json();

      if (existingUsers.length > 0) {
        alert("User already exists with this email");
        return;
      }

      // Add new user
      const newUser: UserType = {
        id: crypto.randomUUID(),
        fullname: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        phone: formData.phone,
        type: "CLIENT",
        location: "Berlin",
      };

      const createRes = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!createRes.ok) throw new Error("Failed to register user");

      const createdUser = await createRes.json();
      setUser(createdUser);
      localStorage.setItem("user", JSON.stringify(createdUser));

      alert("Signup successful!");

      navigate("/client-home");
    } catch (error) {
      console.error("An error occurred: ", error);
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
            onChange={handleChange}
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
            name="confirmPassword"
            className={styles.registerForm__inputField}
            value={formData.confirmPassword}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
}
