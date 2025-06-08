import { pageLoading } from "../../../assets";
import styles from "./_styles.module.scss";

const SuspenseElement = ({ isPageLoader = true }) => {
  return (
    <div
      className={`${styles.suspense_container} ${isPageLoader ? styles.page_loader : ""}`}
    >
      <img src={pageLoading} alt="loader" />
    </div>
  );
};

export default SuspenseElement;
