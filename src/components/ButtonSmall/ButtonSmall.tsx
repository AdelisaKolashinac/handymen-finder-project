import styles from "./ButtonSmall.module.css";

interface ButtonSmallProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonSmall({ children, ...rest }: ButtonSmallProps) {
  return (
    <button className={styles.buttonSmall} {...rest}>
      {children}
    </button>
  );
}
