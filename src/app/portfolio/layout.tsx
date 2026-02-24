import styles from "./portfolio.module.css"

export default function portfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.layoutTitle}>Our Works</h1>
      {children}
    </div>
  );
}


