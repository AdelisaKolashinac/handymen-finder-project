import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1>
        Handwerker leicht <span className="fasthand-regular">gemacht</span>
      </h1>
      <p>Alle Dienstleistungen, die Sie brauchen, an einem Ort.</p>
      <div className={styles.heroImageContainer}>
        <img
          src="./homepage/workers-services-image.png
"
          alt="Illustration of workers offering various services"
        />
      </div>
    </section>
  );
}
