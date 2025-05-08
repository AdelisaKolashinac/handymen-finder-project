import styles from "./Filter.module.css";
import { filterCategories } from "./filterData";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSearchStore } from "../../stores/searchStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Filter({ isOpen, onClose }: Props) {
  const { setFilters, resetFilters } = useSearchStore();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );

  // Handle service filter selection
  const handleServiceChange = (service: string) => {
    setSelectedServices(
      (prev) =>
        prev.includes(service)
          ? prev.filter((item) => item !== service) // Deselect if already selected
          : [...prev, service] // Add if not selected
    );
  };

  // Handle availability filter selection
  const handleAvailabilityChange = (availability: string) => {
    setSelectedAvailability(
      (prev) =>
        prev.includes(availability)
          ? prev.filter((item) => item !== availability) // Deselect if already selected
          : [...prev, availability] // Add if not selected
    );
  };

  const handleApplyFilters = () => {
    setFilters({
      services: selectedServices,
      availability: selectedAvailability,
    });
    onClose(); // Close the filter modal after applying the filters
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullScreen>
      <IconButton
        aria-label="close"
        sx={{ position: "absolute", right: 8, top: 8 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        sx={{ mt: "40px", display: "flex", justifyContent: "space-between" }}
      >
        <p className={styles.filter__title}>Filter</p>
        <button
          className={styles.filter__reset}
          onClick={() => {
            resetFilters();
            onClose();
          }}
          aria-label="Reset all filters"
        >
          Reset all
        </button>
      </DialogTitle>
      <DialogContent>
        <span className={styles.filter__label}>Location</span>
        <div className={styles.filter__buttonContainer}>
          <button className={styles.prefixButton}>Phone prefix</button>
          <button className={styles.distanceButton}>distance</button>
        </div>

        <input
          type="text"
          name="Zip"
          placeholder="Zip code"
          className={styles.filter__input}
        />
        <p className={styles.filter__subtitle}>Type of service</p>

        {/* Render category checkboxes */}
        <div className={styles.filter__checkboxContainer}>
          {filterCategories.map((category) => (
            <Checkbox
              key={category.id}
              id={category.id}
              name="service"
              checked={selectedServices.includes(category.label)}
              onChange={() => handleServiceChange(category.label)}
            >
              {category.label}
            </Checkbox>
          ))}
        </div>

        {/* Render availability checkboxes */}
        <div className={styles.filter__availabilityOptions}>
          <Checkbox
            id="available"
            name="availability"
            checked={selectedAvailability.includes("available")}
            onChange={() => handleAvailabilityChange("available")}
          >
            Available
          </Checkbox>
          <Checkbox
            id="not-available"
            name="availability"
            checked={selectedAvailability.includes("not-available")}
            onChange={() => handleAvailabilityChange("not-available")}
          >
            Not Available
          </Checkbox>
        </div>

        {/* Button for applying filters */}
        <div className={styles.filter__applyButton}>
          <Button
            onClick={handleApplyFilters}
            aria-label="Apply selected filters"
          >
            Use the filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
