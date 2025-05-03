import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroSection__title}>
        Handwerker leicht <span className="fasthand-regular">gemacht</span>
      </h1>
      <p className={styles.heroSection__subtitle}>
        Alle Dienstleistungen, die Sie brauchen, an einem Ort.
      </p>
      <div className={styles.heroSection__imgContainer}>
        <img
          src="./homepage/workers-services-image.png
"
          alt="Illustration of workers offering various services"
        />
      </div>
    </section>
  );
}
