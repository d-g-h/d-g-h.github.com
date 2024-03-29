type LaborProps = {
  title: string;
  company: string;
  location: string;
  start: string;
  end?: string;
  children: React.ReactNode;
};

import styles from "./labor.module.css";
import Time from "../time"

export default function Labor({
  title,
  company,
  location,
  start,
  end,
  children,
}: LaborProps) {
  return (
    <li className={styles.labor}>
      <div className={styles.title}>{title}</div>
      <div className={`${company === "TED" ? styles.ted : "highlight"}`}>
        {company}
      </div>
      <div className={styles.location}>{location}</div>
      <div className={styles.time}>
        <Time start={start} end={end} />
      </div>
      {children}
    </li>
  );
}
