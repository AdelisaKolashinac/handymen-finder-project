import React, { useState } from "react";
import styles from "./PostAd.module.css";
import { Button } from "../../../../../components/Button/Button";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import { useUserStore } from "../../../../../stores/userStore";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../../config";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "../../../../../components/Modal/Modal";
import { Ad } from "../../../../../types/types";

export function PostAd() {
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    service: "",
    description: "",
    location: "",
    urgency: "",
    imageGallery: [] as { id: string; name: string; base64: string }[],
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setError("");
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: e.target.checked,
    }));
  };

  const triggerModal = (message: string, type: "success" | "error") => {
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files);
    const base64Files = await Promise.all(
      newFiles.map(async (file) => ({
        id: uuidv4(),
        name: file.name,
        base64: await toBase64(file),
      }))
    );

    setFormData((prevData) => ({
      ...prevData,
      imageGallery: [...(prevData.imageGallery || []), ...base64Files],
    }));
  };

  const handleRemoveImage = (idToRemove: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imageGallery: prevData.imageGallery?.filter(
        (img) => img.id !== idToRemove
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    const newAd: Ad = {
      id: uuidv4(),
      userId: user?.id || "",
      tag: "Trustworthy",
      status: "new",
      createdAt: new Date().toISOString(),
      service: formData.service,
      description: formData.description,
      location: formData.location,
      urgency: formData.urgency,
      termsAccepted: formData.termsAccepted,
      imageGallery: formData.imageGallery,
    };

    try {
      const res = await fetch(`${API_URL}/ads`, {
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
        service: "",
        description: "",
        location: "",
        urgency: "",
        imageGallery: [],
        termsAccepted: false,
      });
      setError("");
      triggerModal("Your ad has been created successfully!", "success");
      setTimeout(() => navigate("/client-profile"), 3000);
    } catch (error) {
      console.error(error);
      triggerModal("Failed to post a job. Please try again", "error");
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
            <label htmlFor="imageGallery" className={styles.postAd__label}>
              Fotos hochladen:
            </label>
            <label htmlFor="photos" className={styles.uploadBox}>
              <img src="/icons/cloud-icon.png" alt="Upload" />
              <span>Fotos auswählen</span>
              <input
                id="photos"
                type="file"
                name="imageGallery"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className={styles.hiddenInput}
              />
            </label>

            {/* Thumbnail preview grid */}
            {formData.imageGallery && (
              <div className={styles.previewGrid}>
                {formData.imageGallery.map((img) => (
                  <div key={img.id} className={styles.thumbnail}>
                    <img
                      src={img.base64}
                      alt={`Preview ${img.id}`}
                      className={styles.previewImage}
                    />
                    <button
                      onClick={() => handleRemoveImage(img.id)}
                      className={styles.removeBtn}
                      aria-label="Remove image"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
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
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalMessage={modalMessage}
          modalType={modalType}
        />
      )}
    </>
  );
}
