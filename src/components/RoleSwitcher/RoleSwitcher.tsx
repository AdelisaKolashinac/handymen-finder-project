import { useRoleContext } from "../../context/Context";
import styles from "./RoleSwitcher.module.css";

export function RoleSwitcher() {
  const { isClient, handleSwitch } = useRoleContext();

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
