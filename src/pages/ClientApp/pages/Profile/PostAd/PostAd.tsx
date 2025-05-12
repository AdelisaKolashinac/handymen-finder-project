import React, { useState } from "react";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import styles from "./PostAd.module.css";
import { Button } from "../../../../../components/Button/Button";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";

export function PostAd() {
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    location: "",
    photos: "",
  });

  const { navigate } = useAppNavigation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/ads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to post job");
      }
      setFormData({
        service: "",
        description: "",
        location: "",
        photos: "",
      });
      alert("Anzeige wurde erfolgreich erstellt!");
      navigate("/client-profile");
    } catch (error) {
      alert("Failed to post job.");
      console.error(error);
    }
  };

  return (
    <div className={`wrapper ${styles.postAd}`}>
      <header className={styles.postAd__header}>
        <button
          className={styles.postAd__backButton}
          onClick={() => navigate("/client-profile")}
          aria-label="Back to profile"
        >
          <img src="/arrows&location/arrow-left.png" alt="Back to profile" />
        </button>
        <h2 className={styles.postAd__title}>Stelle ausschreiben</h2>
        <button
          className={styles.postAd__notificationButton}
          aria-label="Notifications"
        >
          <img src="/icons/bell-icon.png" alt="Notifications" />
        </button>
      </header>
      <p className={styles.postAd__description}>
        Füllen Sie alle erforderlichen Felder aus, um eine Stelle
        auszuschreiben.
      </p>
      <form className={styles.postAd__form} onSubmit={handleSubmit}>
        <div className={styles.postAd__formGroup}>
          <label htmlFor="service" className={styles.postAd__label}>
            Welche Dienstleistung benötigen Sie? <span>*</span>
          </label>
          <input
            type="text"
            name="service"
            id="service"
            className={styles.postAd__input}
            value={formData.service}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.postAd__formGroup}>
          <label htmlFor="description" className={styles.postAd__label}>
            Beschreibung:
          </label>
          <textarea
            name="description"
            id="description"
            className={styles.postAd__input}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.postAd__formGroup}>
          <label htmlFor="location" className={styles.postAd__label}>
            Standort: <span>*</span>
          </label>
          <div className={styles.postAd__iconOne}>
            <img src="/icons/location-icon-orange.png" alt="Location" />
          </div>
          <input
            type="text"
            name="location"
            id="location"
            className={styles.postAd__input}
            value={formData.location}
            onChange={handleChange}
            placeholder="Gib deine Adresse ein"
            required
          />
          <div className={styles.postAd__iconTwo}>
            <img src="/icons/my-location-icon.png" alt="Location" />
          </div>
        </div>
        <div className={styles.postAd__formGroup}>
          <label htmlFor="photos" className={styles.postAd__label}>
            Fotos hochladen:
          </label>
          <textarea
            name="photos"
            id="photos"
            rows={4}
            className={styles.postAd__input}
            value={formData.photos}
            onChange={handleChange}
          ></textarea>
          <div className={styles.postAd__iconPhoto}>
            <img src="/icons/cloud-icon.png" alt="Upload a photo" />
          </div>
        </div>
        <Checkbox id="terms">Lorem ipsum dolor ...</Checkbox>
        <div className={styles.postAd__button}>
          <Button type="submit">Eine Stelle ausschreiben</Button>
        </div>
      </form>
    </div>
  );
}
