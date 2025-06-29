import { Category } from "../../types/types";
import styles from "./CategoryCard.module.css";

interface Props {
  category: Category;
  onClick?: (searchTerm: string) => void;
}

export function CategoryCard({ category, onClick }: Props) {
  return (
    <div
      className={styles.categoryCard}
      onClick={() => onClick && onClick(category.title)}
    >
      <img src={category.image} alt={category.title} />
      <h5 className={styles.categoryCard__title}>{category.title}</h5>
    </div>
  );
}
