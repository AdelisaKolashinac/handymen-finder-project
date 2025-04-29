import styles from "./ButtonTransparent.module.css";

interface ButtonTransparentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
}

export function ButtonTransparent({
  children,
  width,
  ...rest
}: ButtonTransparentProps) {
  return (
    <button className={styles.buttonTransparent} style={{ width }} {...rest}>
      {children}
    </button>
  );
}
