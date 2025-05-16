import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { useSearchStore } from "../../stores/searchStore";
import { useFetchCategories } from "../../hooks/useFetchCategories";

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Hamburger({ setIsMenuOpen }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { setSearchTerm, setFilters } = useSearchStore();
  const {categories} = useFetchCategories();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setFilters({
      categories: selectedCategory ? [selectedCategory] : [],
      availability: [], 
    });
    navigate("/services");
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.menuOverlay} aria-label="Hamburger Menu">
      <ul className={styles.hamburgerMenuList}>
        <li>
          <Link to="">Suchen</Link>
        </li>
        <li>
          <Link to="">Inserent</Link>
        </li>
        <li>
          <Link to="/signin">Anmelden</Link>
        </li>
        <li>
          <Link to="/signup">Registrieren</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit} className={styles.hamburgerMenuForm}>
        <input
          type="search"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Suchen"
        />
        <select
          name="category"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="">Kategorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
        <Button type="submit">Suchen</Button>
      </form>
    </div>
  );
}
