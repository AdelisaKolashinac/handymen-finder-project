import { InputWithIcon } from "./components/InputWithIcon";
import styles from "./SignupAsUser.module.css";

export default function SignupForm() {
  return (
    <form className={styles.registerForm}>
      <InputWithIcon
        icon="/input-user-icon.png"
        placeholder="name"
      />
      <InputWithIcon
        icon="/signupAsUser/input-mail-icon.png"
        placeholder="e-mail"
      />
      <InputWithIcon
        icon="/signupAsUser/input-lock-icon.png"
        icon_two="/signupAsUser/not-visible-icon.png"
        placeholder="password"
      />
      <InputWithIcon
        icon="/signupAsUser/input-lock-icon.png"
        icon_two="/signupAsUser/not-visible-icon.png"
        placeholder="Confirm password"
      />
      <InputWithIcon
        icon="/signupAsUser/input-phone-icon.png"
        placeholder="Telephone number"
      />
    </form>
  );
}
