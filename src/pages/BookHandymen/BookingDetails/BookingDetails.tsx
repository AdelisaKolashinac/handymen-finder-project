import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./BookingDetails.module.css";
import { Button } from "../../../components/Button/Button";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";
import { BookHandymanCard } from "../BookHandymanCard/BookHandymanCard";
import { useUserStore } from "../../../stores/userStore";
import { Modal } from "../../../components/Modal/Modal";
import { Booking } from "../../../types/types";
import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../../../config";
import { useFetchReviews } from "../../../hooks/useFetchReviews";
import { enrichHandymenWithReviews } from "../../../utils/enrichHandymen";

export default function BookingDetails() {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const user = useUserStore((state) => state.user);

  const location = useLocation();
  const { date, time, location: selectedLocation } = location.state || {};
  const { handymen } = useFetchHandymen();
  const { reviews } = useFetchReviews();
  const handymenWithRatings = enrichHandymenWithReviews(handymen, reviews);
  const { id } = useParams();
  const navigate = useNavigate();

  const foundHandyman = handymenWithRatings.find((hm) => hm.id === id);

  useEffect(() => {
    if (!date || !time) {
      navigate("/");
    }
  }, [date, time, handymen, id, navigate]);

  if (!foundHandyman) {
    <p>Loading...</p>;
    return;
  }

  const formattedDate = format(date, "EEEE, MMMM d");

  const handleConfirmBooking = async (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!date || !time || !selectedLocation) {
      setError("Please fill all the details.");
      return;
    }

    if (!user?.id || !foundHandyman?.id) {
      setError("User or handyman data missing.");
      return;
    }

    const newBooking: Booking = {
      id: uuidv4(),
      userId: user?.id,
      handymanId: foundHandyman.id,
      senderRole: "user",
      status: "ongoing",
      service: selectedService,
      message,
      date,
      time,
      location: selectedLocation,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
      });

      if (!res.ok) {
        throw new Error("Failed to save booking");
      }

      triggerModal("Booking confirmed!", "success");
      setTimeout(() => navigate("/client-profile"), 3000);
    } catch (error) {
      console.error(error);
      triggerModal(
        "There was a problem saving your booking. Please try again.",
        "error"
      );
      setTimeout(() => navigate("/client-profile"), 3000);
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
      <section className={`wrapper ${styles.BookingDetails}`}>
        <header className={styles.BookingDetails__header}>
          <Link
            to={`/handyman-public-profile/${id}`}
            className={styles.BookingDetails__backButton}
          >
            <img src="/arrows&location/arrow-left.png" alt="Go back" />
            <span>Date/time</span>
          </Link>
        </header>
        <form
          className={styles.BookingDetails__form}
          onSubmit={handleConfirmBooking}
        >
          <label className={`border-bottom ${styles.BookingDetails__label}`}>
            Service request
          </label>
          <div className={styles.BookingDetails__formGroup}>
            <div className={styles.BookingDetails__time_date}>
              <p>{formattedDate}</p>
              <div className={styles.BookingDetails__time}>
                <img src="/icons/clock-icon.png" alt="time" />
                <p>{time}</p>
              </div>
            </div>
            <BookHandymanCard
              resultCard={foundHandyman}
              averageRating={foundHandyman.averageRating}
              reviewsCount={foundHandyman.reviewsCount}
            />
          </div>
          <p className={styles.BookingDetails__label}>Choose services:</p>
          <div className={styles.BookingDetails__services}>
            {foundHandyman.services?.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => {
                  setSelectedService(service);
                }}
                className={`${styles.BookingDetails__services_button} ${
                  selectedService === service ? styles.selectedService : ""
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          <div className={`border-bottom ${styles.BookingDetails__formGroup}`}>
            <label htmlFor="message" className={styles.BookingDetails__label}>
              Enter your request <span>optional</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
            ></textarea>
          </div>
          <div className={`border-bottom ${styles.BookingDetails__formGroup}`}>
            <label htmlFor="address" className={styles.BookingDetails__label}>
              What is your address? <span>optional</span>
            </label>
            <div
              onClick={() =>
                navigate("/enter-location", {
                  state: { date, time, id, location: selectedLocation },
                })
              }
            >
              <div className={styles.BookingDetails__iconOne}>
                <img
                  src="/arrows&location/grey-location-icon.svg"
                  alt="Location"
                />
              </div>
              <input
                type="text"
                name="address"
                id="address"
                value={selectedLocation || ""}
                className={styles.BookingDetails__input_icon}
                placeholder="Enter your address"
                readOnly
              />
              <div className={styles.BookingDetails__iconTwo}>
                <img src="/icons/my-location-icon.png" alt="Location" />
              </div>
            </div>
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <div className={styles.BookingDetails__button}>
            <Button type="submit">Send request</Button>
          </div>
        </form>
      </section>
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
