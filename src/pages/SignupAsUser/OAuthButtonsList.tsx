import { OAuthButton } from "./components/OAuthButton";
import styles from "./SignupAsUser.module.css";

export default function OAuthButtonsList() {
  return (
    <div className={styles.oauthList}>
      <OAuthButton
        iconSrc="/signupAsUser/google-icon.png"
        iconAlt="Google logo"
      >
        Continue with Google
      </OAuthButton>
      <OAuthButton
        iconSrc="/signupAsUser/facebook-icon.png"
        iconAlt="Facebook logo"
      >
        Continue with Facebook
      </OAuthButton>
      <OAuthButton iconSrc="/signupAsUser/apple-icon.png" iconAlt="Apple logo">
        Continue with Apple
      </OAuthButton>
      <OAuthButton iconSrc="/signupAsUser/mail-icon.png" iconAlt="Mail logo">
        With Email
      </OAuthButton>
    </div>
  );
}

{
  /* <LogoHeader />
SignupInputs.tsx
SubmitButton.tsx
AlreadyRegisteredText.tsx */
}
