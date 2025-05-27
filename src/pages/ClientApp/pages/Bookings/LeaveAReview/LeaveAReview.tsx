import React, { useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import styles from "./LeaveAReview.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFetchHandymen } from "../../../../../hooks/useFetchHandymen";
import { useUserStore } from "../../../../../stores/userStore";
import { v4 as uuidv4 } from "uuid";
import { Review } from "../../../../../types/types";
import { API_URL } from "../../../../../config";
import { Modal } from "../../../../../components/Modal/Modal";

export function LeaveAReview() {
  const [formData, setFormData] = useState({
    rating: 0,
    message: "",
    imageGallery: [] as { id: string; name: string; base64: string }[],
    isPublish: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const user = useUserStore((state) => state.user);
  const { handymen } = useFetchHandymen();

  const navigate = useNavigate();
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) {
    return <p>Booking not found. Please go back and try again.</p>;
  }

  const handyman = handymen.find((hm) => hm.id === booking.handymanId);

  if (!handyman) return;

  const handleStarClick = (rating: number) => {
    setError(null);
    setFormData((prevData) => ({
      ...prevData,
      rating,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError(null);
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setFormData((prevData) => ({
      ...prevData,
      isPublish: e.target.checked,
    }));
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
      imageGallery: prevData.imageGallery.filter(
        (img) => img.id !== idToRemove
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.isPublish) {
      setError("You must agree to publish your assessment.");
      return;
    }

    const newReview: Review = {
      id: uuidv4(),
      handymanId: handyman.id,
      reviewerId: user?.id || "",
      rating: formData.rating,
      comment: formData.message,
      imageGallery: formData.imageGallery,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!res.ok) {
        throw new Error("Failed to post an ad");
      }

      await fetch(`${API_URL}/bookings/${booking.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
      });

      setFormData({
        rating: 0,
        message: "",
        imageGallery: [],
        isPublish: false,
      });
      setError(null);
      triggerModal("Your review has been posted successfully!", "success");

      setTimeout(
        () =>
          navigate("/client-bookings", {
            state: {
              justCompleted: {...booking, status: "completed", rating: formData.rating},
            },
          }),
        3000
      );
    } catch (error) {
      console.error(error);
      triggerModal("Failed to post a review. Please try again", "error");
    }
  };

  const triggerModal = (message: string, type: "success" | "error") => {
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <div className={`wrapper ${styles.leaveReview}`}>
        {/* Header with back arrow and title */}
        <div className={styles.leaveAReview__header}>
          <Link to={"/bookings"}>
            <img
              src="/arrows&location/arrow-left.png"
              alt="Back arrow to previous page"
            />
          </Link>
          <h4 className={styles.leaveAReview__title}>Leave a review</h4>
        </div>
        <p className={styles.leaveAReview__subtitle}>
          Please rate the craftsman and the performance before continuing
        </p>
        <form onSubmit={handleSubmit}>
          <label className={styles.leaveAReview__label}>
            Rate your service with <b>{handyman.name}</b>
          </label>

          {/* Star rating */}
          <div className={styles.leaveAReview__stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                onClick={() => handleStarClick(star)}
                src={
                  formData.rating >= star
                    ? "/star.svg"
                    : "/clientApp/bookings/empty-star-icon.png"
                }
                alt="Star icon for rating"
              />
            ))}
          </div>

          {/* Message input for review */}
          <div className={styles.leaveAReview__messageBox}>
            <label htmlFor="message" className={styles.leaveAReview__label}>
              Share your experience
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter a message"
              className={styles.leaveAReview__textarea}
            ></textarea>
          </div>
          <div className={styles.leaveAReview__photoUpload}>
            <label htmlFor="photos" className={styles.uploadBox}>
              <img
                src="/clientApp/bookings/camera-icon.png"
                alt="Add photos camera icon"
              />
              <span className={styles.leaveAReview__photoText}>Add photos</span>
              <input
                id="photos"
                type="file"
                name="imageGallery"
                accept="image/*"
                onChange={handleImageUpload}
                multiple
                className={styles.hiddenInput}
              />
            </label>

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
                      className={styles.removeBtn}
                      aria-label="Remove image"
                      onClick={() => handleRemoveImage(img.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.leaveAReview__checkbox}>
            <Checkbox
              id="published"
              checked={formData.isPublish}
              onChange={handleCheckboxChange}
            >
              I agree that my assessment is published
            </Checkbox>
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <div className={styles.leaveAReview__button}>
            <Button type="submit">Send evaluation</Button>
          </div>
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
