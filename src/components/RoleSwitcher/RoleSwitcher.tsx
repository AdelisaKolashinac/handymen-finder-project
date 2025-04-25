import styles from "./RoleSwitcher.module.css";

interface Props {
  isClient: boolean;
  handleSwitch: () => void;
}

export function RoleSwitcher({ isClient, handleSwitch }: Props) {
  return (
    <div className={styles.roleSwitcherContainer}>
      {/* For Handwerker */}
      <span className={isClient ? "" : styles.activeRole}>Für Handwerker</span>

      {/* Toggle button */}
      <div onClick={handleSwitch} aria-label="Toggle role">
        <img
          src={
            isClient
              ? "/homepage/client-switch.svg"
              : "/homepage/worker-switch.svg"
          }
          alt={isClient ? "Switch to Client Role" : "Switch to Worker Role"}
        />
      </div>

      {/* For Kunden */}
      <span className={isClient ? styles.activeRole : ""}>Für Kunden</span>
    </div>
  );
}
