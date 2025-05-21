import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./BookingCalendar.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { Button } from "../../../components/Button/Button";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";
import { mapAvailabilityToSlots } from "../../../utils/mapAvailabilityToSlots";
import { format } from "date-fns";

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [handymanAvailable, setHandymanAvailable] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  const { handymen } = useFetchHandymen();
  const navigate = useNavigate();

  const timeSlots = [
    { label: "8AM-12PM", icon: "/meteocons_time-late-morning-fill.png" },
    { label: "12PM-4PM", icon: "/meteoconsTimeAfternoonFill1.png" },
    { label: "4PM-8PM", icon: "/meteocons_time-evening-fill.png" },
  ];

  const dateStr = format(selectedDate, "yyyy-MM-dd");

  useEffect(() => {
    const handyman = handymen.find((hm) => hm.id.toString() === id);

    if (handyman?.availability?.[dateStr]) {
      const slots = mapAvailabilityToSlots(handyman.availability[dateStr]);
      setHandymanAvailable(slots);
    } else {
      setHandymanAvailable([]);
    }

    setSelectedTime("");
  }, [handymen, id, selectedDate, dateStr]);

  const handleContinue = () => {
    if (!selectedTime) {
      setError("Please select a time slot.");
      return;
    }

    setError(null);

    navigate(`/booking-details/${id}`, {
      state: {
        date: dateStr,
        time: selectedTime,
      },
    });
  };

  return (
    <section className={`wrapper ${styles.BookingCalendar}`}>
      <header className={styles.BookingCalendar__header}>
        <Link
          to={`/handyman-public-profile/${id}`}
          className={styles.BookingCalendar__backButton}
        >
          <img src="/arrows&location/arrow-left.png" alt="Go back" />
          <span>To the profile</span>
        </Link>
      </header>
      <div className={styles.BookingCalendar__calendarSection}>
        <p>Select date</p>
        <Calendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate as Date)}
          className={styles.BookingCalendar__calendar}
          minDate={new Date()}
        />
      </div>
      <div className={styles.BookingCalendar__timeSection}>
        <p>Available times</p>
        {handymanAvailable.length === 0 && <p>No availability on this day.</p>}
        <div className={styles.BookingCalendar__availableTimes}>
          {timeSlots.map((slot) => {
            const isAvailable = handymanAvailable.includes(slot.label);

            return (
              <div
                key={slot.label}
                className={`${styles.BookingCalendar__time} ${
                  selectedTime === slot.label
                    ? styles.BookingCalendar__active
                    : ""
                } ${!isAvailable ? styles.BookingCalendar__disabled : ""}`}
                onClick={() => isAvailable && setSelectedTime(slot.label)}
              >
                <img src={slot.icon} alt={slot.label} />
                <span>{slot.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      {error && <p className="errorMessage">{error}</p>}
      <div className={styles.BookingCalendar__button}>
        <Button onClick={handleContinue}>Further</Button>
      </div>
    </section>
  );
}
