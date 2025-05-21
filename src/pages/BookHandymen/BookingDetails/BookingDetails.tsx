import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./BookingDetails.module.css";
import { Button } from "../../../components/Button/Button";
import { useEffect } from "react";
import { format } from "date-fns";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";
import { calculateAverageRating } from "../../../utils/calculateAverageRating";
import { BookHandymanCard } from "../BookHandymanCard/BookHandymanCard";

export default function BookingDetails() {
  const location = useLocation();
  const { date, time } = location.state || {};
  const { handymen } = useFetchHandymen();
  const { id } = useParams();
  const navigate = useNavigate();

  const foundHandyman = handymen.find((hm) => hm.id === id);

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

  return (
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
      <form className={styles.BookingDetails__form}>
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
            averageRating={calculateAverageRating(foundHandyman.reviews)}
          />
        </div>
        <div className={`border-bottom ${styles.BookingDetails__formGroup}`}>
          <label htmlFor="message" className={styles.BookingDetails__label}>
            Enter your request <span>optional</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={3}
            placeholder="Your message"
          ></textarea>
        </div>
        <div className={`border-bottom ${styles.BookingDetails__formGroup}`}>
          <label htmlFor="address" className={styles.BookingDetails__label}>
            What is your address? <span>optional</span>
          </label>
          <div onClick={() => navigate("/enter-location")}>
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
              className={styles.BookingDetails__input_icon}
              placeholder="Enter your address"
            />
            <div className={styles.BookingDetails__iconTwo}>
              <img src="/icons/my-location-icon.png" alt="Location" />
            </div>
          </div>
        </div>
        <div className={styles.BookingDetails__button}>
          <Button>Send request</Button>
        </div>
      </form>
    </section>
  );
}
