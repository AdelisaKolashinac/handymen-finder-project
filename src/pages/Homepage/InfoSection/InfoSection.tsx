import { categories } from "../staticData";
import { Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./InfoSection.module.css";
import { useState } from "react";

export function InfoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const changeIndicator = (index: number) => {
    setActiveIndex(index);
  };

  const itemsPerSlide = 9;
  const totalItems = categories.length;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);

  // Function to calculate the category range for each carousel slide
  const getCategoriesForSlide = (index: number) => {
    const start = index * itemsPerSlide;
    const end = start + itemsPerSlide;
    return categories.slice(start, end);
  };

  return (
    <section className={styles.infoSection}>
      <div className="wrapper">
        <h2 className="title-h2">Warum Menschen uns mögen</h2>
        <img
          src="/homepage/blue-line.png"
          alt="Decorative blue line"
          className={styles.blueLine}
        />
        <div className={styles.featureItemsList}>
          <div className={styles.featureItem}>
            <img src="./homepage/checkmark-icon.svg" alt="Feature check icon" />
            <p>Kalenderbuchung und einfache Kommunikation.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="./homepage/checkmark-icon.svg" alt="Feature check icon" />
            <p>Zertifizierte Profis für höchste Qualität.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="./homepage/checkmark-icon.svg" alt="Feature check icon" />
            <p>Verfügbare Handwerker für dringende Reparaturen.</p>
          </div>
        </div>
        <h2 className="title-h2">Wir decken alles ab</h2>

        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          controls={false}
          interval={null}
          className={styles.carouselContainer}
        >
          {[...Array(totalSlides)].map((_, index) => {
            const categoriesForSlide = getCategoriesForSlide(index);

            // Only render the slide if it contains categories
            return categoriesForSlide.length > 0 ? (
              <Carousel.Item key={index}>
                <div className={styles.carouselItemContainer}>
                  {categoriesForSlide.map((category) => (
                    <div key={category.id} className={styles.categoryCard}>
                      <img src={category.image} alt={category.title} />
                      <h5>{category.title}</h5>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ) : null; // Don't render empty slides
          })}
        </Carousel>

        {/* Custom Indicators */}
        <div className={styles.sliderIndicators}>
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={styles.indicator}
              onClick={() => changeIndicator(index)}
            >
              <img
                src={`./homepage/categories/carousel-indicator${
                  activeIndex === index ? "-active" : "-inactive"
                }.svg`}
                alt="Carousel Indicator"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
