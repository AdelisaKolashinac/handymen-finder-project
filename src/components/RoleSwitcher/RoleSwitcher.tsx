import { useRoleStore } from "../../stores/roleStore";
import styles from "./RoleSwitcher.module.css";

export function RoleSwitcher() {
  const { isClient, toggleRole } = useRoleStore();

  return (
    <div className={styles.roleSwitcherContainer}>
      {/* For Handwerker/Handyman */}
      <span className={isClient ? "" : "activeRole"}>Für Handwerker</span>

      {/* Toggle button */}
      <div onClick={toggleRole} aria-label="Toggle role">
        <img
          src={
            isClient
              ? "/homepage/client-switch.svg"
              : "/homepage/worker-switch.svg"
          }
          alt={isClient ? "Switch to Client Role" : "Switch to Worker Role"}
        />
      </div>

      {/* For Kunden/Client */}
      <span className={isClient ? "activeRole" : ""}>Für Kunden</span>
    </div>
  );
}
