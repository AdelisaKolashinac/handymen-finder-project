import styles from "../SignupAsUser.module.css";

interface InputWithIconProps {
  icon: string;
  icon_two?: string;
  placeholder: string;
}

export function InputWithIcon({
  icon,
  placeholder,
  icon_two,
}: InputWithIconProps) {
  return (
    <div className={styles.inputWithIconWrapper}>
      <div className={styles.icon}>
        <img src={icon} alt="icon" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.inputField}
      />
      {icon_two && (
        <div className={styles.icon_two}>
          {" "}
          <img src={icon_two} alt="icon" />
        </div>
      )}
    </div>
  );
}
