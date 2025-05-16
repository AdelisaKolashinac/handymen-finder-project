import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button/Button";
import { signInWithGooglePopup } from "../../../../lib/firebase";
import { useUserStore } from "../../../../stores/userStore";
import { User } from "../../../../types/types";
import { OAuthButton } from "../OAuthButton/OAuthButton";
import styles from "./OAuthButtonsList.module.css";

interface Props {
  toggleSignupForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OAuthButtonsList({ toggleSignupForm }: Props) {
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithGooglePopup();

      if (!result.user) {
        throw new Error("No user info from Google");
      }

      const firebaseUser = result.user;

      const appUser: User = {
        id: firebaseUser.uid,
        fullname: firebaseUser.displayName ?? "",
        email: firebaseUser.email ?? "",
        phone: firebaseUser.phoneNumber ?? "",
        type: "CLIENT",
        provider: "GOOGLE",
      };

      setUser(appUser);
      navigate("/client-home");
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <>
      <div className={styles.oauthList}>
        <OAuthButton
          iconSrc="/signupAsUser/google-icon.png"
          iconAlt="Google logo"
          onClick={handleGoogleSignup}
        >
          Continue with Google
        </OAuthButton>
        <OAuthButton
          iconSrc="/signupAsUser/facebook-icon.png"
          iconAlt="Facebook logo"
        >
          Continue with Facebook
        </OAuthButton>
        <OAuthButton
          iconSrc="/signupAsUser/apple-icon.png"
          iconAlt="Apple logo"
        >
          Continue with Apple
        </OAuthButton>
        <OAuthButton
          iconSrc="/signupAsUser/mail-icon.png"
          iconAlt="Mail logo"
          onClick={() => toggleSignupForm(true)}
        >
          With Email
        </OAuthButton>
      </div>
      <Button onClick={() => toggleSignupForm(true)}>Register</Button>
    </>
  );
}
