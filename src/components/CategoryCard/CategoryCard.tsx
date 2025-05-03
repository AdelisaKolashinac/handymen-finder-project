import { CategoryType } from "../../types/types";
import styles from "./CategoryCard.module.css";

interface Props {
  category: CategoryType;
}

export function CategoryCard({ category }: Props) {
  return (
    <div className={styles.categoryCard}>
      <img src={category.image} alt={category.title} />
      <h5 className={styles.categoryCard__title}>{category.title}</h5>
    </div>
  );
}
