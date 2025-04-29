import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  id: string;
}

export function Checkbox({ children, id, ...rest }: CheckboxProps) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        {...rest}
        className={styles.checkboxInput}
      />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {children}
      </label>
    </div>
  );
}
