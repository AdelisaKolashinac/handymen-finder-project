import styles from "./Checkmark.module.css";

interface CheckmarkType {
  img: string;
  text_one: string;
  text_two: string;
}

export function Checkmark({ img, text_one, text_two }: CheckmarkType) {
  return (
    <div className={styles.checkmark}>
      <img src={img} alt="Checkmark" />
      <p className={styles.checkmark__textOne}>{text_one}</p>
      <p className={styles.checkmark__textTwo}>{text_two}</p>
    </div>
  );
}
