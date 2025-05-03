import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { signInWithGooglePopup } from "../../lib/firebase";
import { useUserStore } from "../../stores/userStore";
import { UserType } from "../../types/types";
import { OAuthButton } from "./components/OAuthButton";
import styles from "./SignupAsUser.module.css";

interface Props {
  toogleSignupForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OAuthButtonsList({ toogleSignupForm }: Props) {
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithGooglePopup();

      // const userExist = users.find(user => user.email === result.user.email)

      const newUser: UserType = {
        fullname: result.user.displayName ?? "",
        email: result.user.email ?? "",
        password: undefined,
        confirmPassword: undefined,
        phone: result.user.phoneNumber ?? "",
        type: "CLIENT",
        provider: "GOOGLE",
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/client-home")
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

{
  /* <LogoHeader />
SignupInputs.tsx
SubmitButton.tsx
AlreadyRegisteredText.tsx */
}
