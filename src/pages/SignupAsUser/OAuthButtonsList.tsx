import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { signInWithGooglePopup } from "../../lib/firebase";
import { useUserStore } from "../../stores/userStore";
import { UserType } from "../../types/types";
import { OAuthButton } from "./components/OAuthButton";
import styles from "./SignupAsUser.module.css";
import { useRoleStore } from "../../stores/roleStore";

interface Props {
  toogleSignupForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OAuthButtonsList({ toogleSignupForm }: Props) {
  const { isClient } = useRoleStore();

  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithGooglePopup();

      const existingUsersJSON = localStorage.getItem("users");
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      const foundUser = existingUsers.find(
        (user: UserType) => user.email === result.user.email
      );

      let currentUser: UserType;

      if (foundUser) {
        // User already exists
        currentUser = foundUser;
      } else {
        currentUser = {
          fullname: result.user.displayName ?? "",
          email: result.user.email ?? "",
          phone: result.user.phoneNumber ?? "",
          type: isClient ? "CLIENT" : "HANDYMAN",
          provider: "GOOGLE",
        };

        const updatedUsers = [...existingUsers, currentUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }

      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
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
        <OAuthButton iconSrc="/signupAsUser/mail-icon.png" iconAlt="Mail logo">
          With Email
        </OAuthButton>
      </div>
      <Button onClick={() => toogleSignupForm(true)}>Register</Button>
    </>
  );
}
