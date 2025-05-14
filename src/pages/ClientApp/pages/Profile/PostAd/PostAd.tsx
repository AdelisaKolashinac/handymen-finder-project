import React, { useState } from "react";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import styles from "./PostAd.module.css";
import { Button } from "../../../../../components/Button/Button";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import { Box, Modal, Typography } from "@mui/material";
import { useUserStore } from "../../../../../stores/userStore";
import { Ad } from "../../../../../types/types";

export function PostAd() {
  const user = useUserStore((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [formData, setFormData] = useState<Ad>({
    id: crypto.randomUUID(),
    img: "/anna.png",
    name: user?.fullname,
    tag: "trustworthy",
    urgency: "",
    service: "",
    description: "",
    location: "",
    imageGallery: [],
    termsAccepted: false,
    userId: user?.id,
  });
  const [error, setError] = useState("");

  const { navigate } = useAppNavigation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    const newAd = {
      ...formData,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3001/ads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAd),
      });

      if (!res.ok) {
        throw new Error("Failed to post an ad");
      }
      setFormData({
        id: crypto.randomUUID(),
        img: "/anna.png",
        name: user?.fullname,
        tag: "trustworthy",
        urgency: "",
        service: "",
        description: "",
        location: "",
        imageGallery: [],
        termsAccepted: false,
        userId: user?.id,
      });
      setModalMessage("Your ad has been created successfully!");
      setShowModal(true);

      setTimeout(() => navigate("/client-profile"), 2000);
    } catch (error) {
      console.error(error);
      setModalMessage("Failed to post a job. Please try again");
      setShowModal(true);
    }
  };

  return (
    <>
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
              className={styles.postAd__input_icon}
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
            <label htmlFor="urgency" className={styles.postAd__label}>
              Urgency: <span>*</span>
            </label>
            <select
              name="urgency"
              id="urgency"
              className={styles.postAd__select}
              value={formData.urgency}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select urgency
              </option>
              <option value="immediate">Immediate</option>
              <option value="flexible">Flexible</option>
            </select>
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
              value={formData.imageGallery}
              onChange={handleChange}
            ></textarea>
            <div className={styles.postAd__iconPhoto}>
              <img src="/icons/cloud-icon.png" alt="Upload a photo" />
            </div>
          </div>
          <Checkbox
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
            id="termsAccepted"
          >
            I agree to the terms-and-conditions
          </Checkbox>
          <div className={styles.postAd__button}>
            <Button type="submit">Eine Stelle ausschreiben</Button>
          </div>
          {error && <p className="errorMessage">{error}</p>}
        </form>
      </div>

      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 3,
              borderRadius: 2,
              boxShadow: 24,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontStyle: "italic", color: "#666" }}
            >
              {modalMessage}
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
}
