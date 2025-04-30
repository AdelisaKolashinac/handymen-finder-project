import { Category } from "../../pages/Homepage/homepageData";
import styles from "./CategoryCard.module.css";

interface Props {
  category: Category;
}

export function CategoryCard({ category }: Props) {
  return (
    <div className={styles.categoryCard}>
      <img src={category.image} alt={category.title} />
      <h5>{category.title}</h5>
    </div>
  );
}
