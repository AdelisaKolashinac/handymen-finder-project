import styles from "./Filter.module.css";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useMemo, useState } from "react";
import { useSearchStore } from "../../stores/searchStore";
import { useFetchHandymen } from "../../hooks/useFetchHandymen";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Filter({ isOpen, onClose }: Props) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );

  const { handymen } = useFetchHandymen();
  const { filters, setFilters, resetFilters } = useSearchStore();

  const allServices = useMemo(() => {
    const serviceSet = new Set<string>();

    handymen.forEach((hm) => {
      hm.services?.forEach((service) => {
        serviceSet.add(service);
      });
    });

    return Array.from(serviceSet).sort();
  }, [handymen]);

  useEffect(() => {
    if (isOpen) {
      setSelectedServices(filters.services || []);
      setSelectedAvailability(filters.availability || []);
    }
  }, [isOpen, filters.services, filters.availability]);

  // Handle service filter selection
  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  // Handle availability filter selection
  const handleAvailabilityChange = (availability: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(availability)
        ? prev.filter((item) => item !== availability)
        : [...prev, availability]
    );
  };

  const handleApplyFilters = () => {
    setFilters({
      services: selectedServices,
      availability: selectedAvailability,
    });
    onClose();
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
          {allServices.map((service) => (
            <Checkbox
              key={service}
              id={service}
              name="service"
              checked={selectedServices.includes(service)}
              onChange={() => handleServiceChange(service)}
            >
              {service}
            </Checkbox>
          ))}
        </div>

        {/* Render availability checkboxes */}
        <div className={styles.filter__availabilityOptions}>
          <Checkbox
            id="available"
            name="available"
            checked={selectedAvailability.includes("available")}
            onChange={() => handleAvailabilityChange("available")}
          >
            available
          </Checkbox>
          <Checkbox
            id="not-available"
            name="not-availability"
            checked={selectedAvailability.includes("not available")}
            onChange={() => handleAvailabilityChange("not available")}
          >
            not available
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
