import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./HandymanPublicProfile.module.css";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { Button } from "../../components/Button/Button";
import { HomepageReview } from "../../components/HomepageReview/HomepageReview";
import { customerReviews } from "../../data/data";
import { useFetchHandymen } from "../../hooks/useFetchHandymen";
import { HandymanResultCard } from "../../components/HandymanResultCard/HandymanResultCard";
import React from "react";

export default function HandymanPublicProfile() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { handymen, error } = useFetchHandymen();

  const findHandymen = handymen.find((hm) => hm.id === id);

  if (error) return <p className="errorMessage">{error}</p>;
  if (!findHandymen) return <p>Loading...</p>;

  const averageRating = calculateAverageRating(findHandymen.reviews);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "book") {
      navigate(`/book-handyman/${id}`);
    }
  };

  const similarHandymen = handymen.filter((hm) => {
    if (hm.id === findHandymen.id) return false;

    const sharedCategories = hm.categories.some((cat) =>
      findHandymen.categories.includes(cat)
    );

    const sharedServices = hm.services?.some((serv) =>
      findHandymen.services?.includes(serv)
    );

    return sharedCategories || sharedServices;
  });

  return (
    <section className={`wrapper ${styles.handymanPublicProfile}`}>
      <header className={styles.handymanPublicProfile__header}>
        <Link
          to="/client-home"
          className={styles.handymanPublicProfile__backButton}
        >
          <img src="/arrows&location/arrow-left.png" alt="Go back" />
          <span>Back</span>
        </Link>

        <img
          src={findHandymen.img}
          alt="Picture of handyman"
          className={styles.handymanPublicProfile__img}
        />
      </header>
      <div className={styles.handymanPublicProfile__profileTop}>
        <div className={styles.handymanPublicProfile__nameBlock}>
          <h3>{findHandymen.name}</h3>
          <img src="/icons/check-profile-icon.svg" alt="Check profile icon" />
        </div>
        <div className={styles.handymanPublicProfile__availability}>
          <span
            className={
              findHandymen.available === "available"
                ? styles.available
                : styles.notAvailable
            }
          >
            {findHandymen.available}
          </span>
        </div>
      </div>
      <div className={styles.handymanPublicProfile__rating}>
        <div className={styles.handymanPublicProfile__ratingText}>
          <img src="/star.svg" alt="Star Icon" />
          <p>{averageRating.toFixed(1)}</p>
        </div>
        <span className={styles.handymanPublicProfile__reviewsCount}>
          {findHandymen.reviews.length} reviews
        </span>
      </div>
      <div className={styles.handymanPublicProfile__categories}>
        {findHandymen.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className={styles.handymanPublicProfile__location}>
        <img src="/icons/location-icon-orange.png" alt="Location Icon" />
        <p>{findHandymen.location}</p>
      </div>
      <div className={styles.handymanPublicProfile__completedOrders}>
        <img src="/icons/completed-order-icon.png" alt="Completed icon" />
        <p>{findHandymen.performanceStats}</p>
      </div>
      <div className={styles.handymanPublicProfile__actions}>
        <Button>Chat now</Button>
        <select
          name="booking"
          className={styles.handymanPublicProfile__select}
          onChange={handleChange}
        >
          <option value="">...</option>
          <option value="book">Book now</option>
        </select>
      </div>
      <div className={styles.handymanPublicProfile__section}>
        <h3>About me</h3>
        <p>{findHandymen.description}</p>
      </div>
      {findHandymen.services && (
        <div className={styles.handymanPublicProfile__section}>
          <h3>Service description</h3>
          <ul>
            {findHandymen.services.map((serv) => (
              <li key={serv}>{serv}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Listings</h4>
        <span>Lorem Ipsum Sit Amet</span>
        <p>This handyman has not posted any ads .</p>
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Similar profile</h4>
        <span>Lorem ipsum sit amet lorem ipsum sit . .</span>
        {similarHandymen.length > 0 ? (
          <div className={styles.handymanPublicProfile__similarHandymen}>
            {similarHandymen.map((hm) => (
              <HandymanResultCard
                resultCard={hm}
                averageRating={calculateAverageRating(hm.reviews)}
              />
            ))}
          </div>
        ) : (
          <p>No similar handymen found.</p>
        )}
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Current work</h4>
        {findHandymen.imageGallery?.length ? (
          <div className={styles.handymanPublicProfile__galleryImages}>
            {findHandymen.imageGallery.map((img) => (
              <img key={img.id} src={img.src} alt={img.alt} />
            ))}
          </div>
        ) : (
          <p>No current work images available.</p>
        )}
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Customer feedback</h4>
        {findHandymen.reviews.length ? (
          <div className={styles.handymanPublicProfile__reviews}>
            {customerReviews.map((review) => (
              <HomepageReview key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p>No current reviews.</p>
        )}
      </div>
    </section>
  );
}
