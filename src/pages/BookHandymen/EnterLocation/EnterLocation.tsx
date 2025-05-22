import { useLocation, useNavigate } from "react-router-dom";
import styles from "./EnterLocation.module.css";
import React, { useState } from "react";

const apiKey = "pk.9369922d144954bdcd275212abb85e66";

interface LocationResult {
  display_name: string;
  lat: string;
  lon: string;
}

export default function EnterLocation() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<LocationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });
  const location = useLocation();
  const { date, time, id } = location.state || {};
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(
          query
        )}&format=json`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch location");
      }

      const data = await res.json();
      setResult(data[0]);

      setHistory((prev) => {
        const updated = [query, ...prev.filter((item) => item !== query)].slice(
          0,
          10
        );
        localStorage.setItem("searchHistory", JSON.stringify(updated));
        return updated;
      });
    } catch (error) {
      console.error(error);
      setError("Location not found. Please try again.");
      setResult(null);
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };

        setError("");

        try {
          const res = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${coords.lat}&lon=${coords.lon}&format=json`
          );

          if (!res.ok) {
            throw new Error("Reverse geocoding failed");
          }

          const data = await res.json();
          setResult(data);
        } catch (err) {
          console.error(err);
          setError("Could not retrieve address for current location.");
        }
      },
      () => {
        setError("Permission denied or error getting location.");
      }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className={`wrapper ${styles.EnterLocation}`}>
      <header className={styles.EnterLocation__header}>
        <button
          onClick={() => {
            if (result) {
              navigate(`/booking-details/${id}`, {
                state: {
                  date,
                  time,
                  location: result.display_name,
                },
              });
            }
          }}
          className={styles.EnterLocation__backButton}
        >
          <img src="/arrows&location/arrow-left.png" alt="Go back" />
          <span>Enter your location</span>
        </button>
      </header>
      <div className={`border-bottom ${styles.EnterLocation__searchBar}`}>
        <input
          type="search"
          name="location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          className={styles.EnterLocation__input}
        />
        {error && <p className="errorMessage">{error}</p>}

        {result && (
          <div className={styles.EnterLocation__result}>
            <h5>Result:</h5>
            <p>{result.display_name}</p>
          </div>
        )}
        <div className={styles.EnterLocation__useCurrent}>
          <img
            src="/arrows&location/enter-location-icon.png"
            alt="Enter location"
          />
          <button onClick={getCurrentLocation}>
            Use your current location
          </button>
        </div>
      </div>

      {history.length > 0 && (
        <>
          <div className={styles.EnterLocation__history}>
            <div className={styles.EnterLocation__historyLabel}>
              <p>Search result</p>
              <button
                onClick={() => {
                  setHistory([]);
                  localStorage.removeItem("searchHistory");
                }}
              >
                Clear History
              </button>
            </div>

            <ul className={styles.EnterLocation__list}>
              {history.map((item, index) => (
                <li key={index} onClick={() => setQuery(item)}>
                  <img
                    src="/arrows&location/enter-location-icon.png"
                    alt="Enter location"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
