import { Outlet } from "react-router";
import styles from "./styles.module.scss";

const AuthLayout = () => {
  return (
    <div className={styles.auth__layout}>
      <div className={styles.main__content}>
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
