import { Inbox } from "lucide-react";
import styles from "./_styles.module.scss";

const EmptyData = ({ message = "No data found" }: { message?: string }) => {
  return (
    <div className={styles.emptyData}>
      <Inbox className={styles.icon} size={140} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyData;
