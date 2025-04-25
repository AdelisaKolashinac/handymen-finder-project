import styles from "./Checkmark.module.css";

interface CheckmarkType {
  img: string;
  textone: string;
  texttwo: string;
}

export function Checkmark({ img, textone, texttwo }: CheckmarkType) {
  return (
    <div className={styles.checkmark}>
      <img src={img} alt="Checkmark" />
      <p className={styles.textone}>{textone}</p>
      <p className={styles.texttwo}>{texttwo}</p>
    </div>
  );
}
