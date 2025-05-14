import { Link, useParams } from "react-router-dom";
import styles from "./HandymanPublicProfile.module.css";
import { useEffect, useState } from "react";
import { Handyman } from "../../types/types";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { Button } from "../../components/Button/Button";
import { HomepageReview } from "../../components/HomepageReview/HomepageReview";
import { customerReviews } from "../../data/data";

export default function HandymanPublicProfile() {
  const { id } = useParams<{ id: string }>();
  const [handyman, setHandyman] = useState<Handyman | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHandyman = async () => {
      try {
        const res = await fetch("http://localhost:3001/handymen");
        if (!res.ok) throw new Error("Failed to fetch handymen");

        const data: Handyman[] = await res.json();
        const foundHandyman = data.find((h) => h.id.toString() === id);

        if (!foundHandyman) {
          setError("Handyman not found.");
        } else {
          setHandyman(foundHandyman);
        }
      } catch (err) {
        console.error("Failed fetching data", err);
        setError("Error loading handyman.");
      }
    };

    fetchHandyman();
  }, [id]);

  if (error) return <p className="errorMessage">{error}</p>;
  if (!handyman) return <p>Loading...</p>;

  const averageRating = calculateAverageRating(handyman.reviews);

  return (
    <section className={`wrapper ${styles.handymanPublicProfile}`}>
      <header className={styles.handymanPublicProfile__header}>

          <Link to="/client-home" className={styles.handymanPublicProfile__backButton}>
            <img src="/arrows&location/arrow-left.png" alt="Go back" />
            <span>Back</span>
          </Link>
      
        <img
          src={handyman.img}
          alt="Picture of handyman"
          className={styles.handymanPublicProfile__img}
        />
      </header>
      <div className={styles.handymanPublicProfile__profileTop}>
        <div className={styles.handymanPublicProfile__nameBlock}>
          <h3>{handyman.name}</h3>
          <img src="/icons/check-profile-icon.svg" alt="Check profile icon" />
        </div>
        <div className={styles.handymanPublicProfile__availability}>
          <span
            className={
              handyman.available === "available"
                ? styles.available
                : styles.notAvailable
            }
          >
            {handyman.available}
          </span>
        </div>
      </div>
      <div className={styles.handymanPublicProfile__rating}>
        <div className={styles.handymanPublicProfile__ratingText}>
          <img src="/star.svg" alt="Star Icon" />
          <p>{averageRating.toFixed(1)}</p>
        </div>
        <span className={styles.handymanPublicProfile__reviewsCount}>
          {handyman.reviews.length} reviews
        </span>
      </div>
      <div className={styles.handymanPublicProfile__categories}>
        {handyman.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className={styles.handymanPublicProfile__location}>
        <img src="/icons/location-icon-orange.png" alt="Location Icon" />
        <p>{handyman.location}</p>
      </div>
      <div className={styles.handymanPublicProfile__completedOrders}>
        <img src="/icons/completed-order-icon.png" alt="Completed icon" />
        <p>56 Completed orders</p>
      </div>
      <div className={styles.handymanPublicProfile__actions}>
        <Button>Chat now</Button>
        <img src="/alt-menu.png" alt="Menu" />
      </div>
      <div className={styles.handymanPublicProfile__section}>
        <h3>About me</h3>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur. Elit Eget Donec Ipsum a
          Bibendum Fermentum Velit. Vitae Tincidunt Curabitur Dolor Ipsum Ipsum
          Accumsan Commodo. Amet Vestibulum Aliquam Quisque Mauris Amet Mauris
          Ultrices. Consectetur eGet at elit amet non tellus sit .
        </p>
      </div>
      <div className={styles.handymanPublicProfile__section}>
        <h3>Service description</h3>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur. Elit Eget Donec Ipsum a
          Bibendum Fermentum Velit. Vitae Tincidunt Curabitur Dolor Ipsum Ipsum
          Accumsan Commodo. Amet Vestibulum Aliquam Quisque Mauris Amet Mauris
          Ultrices. Consectetur eGet at elit amet non tellus sit .
        </p>
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Listings</h4>
        <span>Lorem Ipsum Sit Amet</span>
        <p>This handyman has not posted any ads .</p>
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Similar profile</h4>
        <span>Lorem ipsum sit amet lorem ipsum sit . .</span>
        {/* display similar profile of handymen */}
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Current work</h4>
        {handyman.imageGallery?.length ? (
          <div className={styles.handymanPublicProfile__galleryImages}>
            {handyman.imageGallery.map((img) => (
              <img key={img.id} src={img.src} alt={img.alt} />
            ))}
          </div>
        ) : (
          <p>No current work images available.</p>
        )}
      </div>
      <div className={styles.handymanPublicProfile__subsection}>
        <h4>Customer feedback</h4>
        {handyman.reviews.length ? (
          <div className={styles.handymanPublicProfile__reviews}>
            {customerReviews.map((review) => (
              <HomepageReview key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p>No current work images available.</p>
        )}
      </div>
    </section>
  );
}
