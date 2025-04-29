import React from "react";
import styles from "../SignupAsUser.module.css";

interface OAuthButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
}

export function OAuthButton({
  children,
  iconSrc,
  iconAlt,
  ...rest
}: OAuthButtonProps) {
  return (
    <button className={styles.OAuthButton} {...rest}>
      {iconSrc && (
        <img src={iconSrc} alt={iconAlt} className={styles.OAuthButton__icon} />
      )}
      {children}
    </button>
  );
}
