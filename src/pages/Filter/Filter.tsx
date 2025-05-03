import styles from "./Filter.module.css";
import { filterCategories } from "./filterData";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
// import React, { useState } from "react";

// Filter by location, available, or categories.

export default function Filter() {
  //   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  //   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { id, checked } = e.target;

  //     setSelectedCategories((prev) =>
  //       checked ? [...prev, id] : prev.filter((catId) => catId !== id)
  //     );
  //   };

  return (
    <section className={styles.filter}>
      <div className="wrapper">
        <div className={styles.filter__closeIcon}>
          <img src="/close-icon.png" alt="Close filter" />
        </div>

        {/* Filter title and reset button */}
        <div className={styles.filter__header}>
          <h3 className={styles.filter__title}>Filter</h3>
          <button className={styles.filter__reset}>Alle zurücksetzen</button>
        </div>
        <span className={styles.filter__label}>Standort</span>
        <div className={styles.filter__buttonContainer}>
          <button className={styles.prefixButton}>Vorwahl</button>
          <button className={styles.distanceButton}>Entfernung</button>
        </div>

        <input
          type="text"
          name="PLZ"
          placeholder="PLZ"
          className={styles.filter__input}
        />
        <p className={styles.filter__subtitle}>Art der Dienstleistung</p>

        {/* Render category checkboxes */}
        <div className={styles.filter__checkboxContainer}>
          {filterCategories.map((category) => (
            <Checkbox key={category.id} id={category.id} name="service">
              {category.label}
            </Checkbox>
          ))}
        </div>

        {/* Additional filter section for Bewertungen (Ratings) */}
        <p className={styles.filter__subtitle}>Bewertungen</p>
        <div className={styles.filter__ratingOptions}>
          <Checkbox id="5-stars" name="rating">
            5 Sterne
          </Checkbox>
          <Checkbox id="4-stars" name="rating">
            4+ Sterne
          </Checkbox>
          <Checkbox id="3-stars" name="rating">
            3+ Sterne
          </Checkbox>
        </div>

        {/* Button for applying filters - always visible */}
        <div className={styles.filter__applyButton}>
          <Button>Wenden Sie die Filter an</Button>
        </div>
      </div>
    </section>
  );
}
