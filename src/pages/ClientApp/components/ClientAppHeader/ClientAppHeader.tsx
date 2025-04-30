import styles from "./ClientAppHeader.module.css";

interface ClientAppHeaderProps {
  title: string;
}

export function ClientAppHeader({ title }: ClientAppHeaderProps) {
  return (
    <div className={styles.clientApp__header}>
      <h2 className={styles.clientApp__title}>{title}</h2>
      <img src="/bell-icon.png" alt="Bell notification icon" />
    </div>
  );
}
