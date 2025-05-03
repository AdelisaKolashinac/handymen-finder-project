import { CategoryCard } from "../../../../components/CategoryCard/CategoryCard";
import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { categories } from "../../../../data/data";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section className={`wrapper ${styles.categories}`}>
      <ClientAppHeader title="Search category" />
      <p className={styles.categories__subtitle}>
        Use the search bar to refine your search, or select a category from
        below
      </p>

      {/* <SearchInput /> */}
      <div className={styles.categories__cardContainer}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
