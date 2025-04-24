import styles from "./RoleSwitcher.module.css";

type Props = {
  isClient: boolean;
  handleSwitch: () => void;
};

export function RoleSwitcher({ isClient, handleSwitch }: Props) {
  return (
    <div className={styles.toggleSwitch}>
      {/* For Handwerker */}
      <span className={isClient ? "" : styles.active}>Für Handwerker</span>

      {/* Toggle button */}
      <div onClick={handleSwitch} aria-label="Toggle role">
        <img
          src={
            isClient
              ? "/homepage/Kunden-switch.svg"
              : "/homepage/Handwerker-switch.svg"
          }
          alt={isClient ? "switch to Kunden" : "switch to Handwerker"}
        />
      </div>

      {/* For Kunden */}
      <span className={isClient ? styles.active : ""}>Für Kunden</span>
    </div>
  );
}
