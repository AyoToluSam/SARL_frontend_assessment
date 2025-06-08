import { Outlet } from "react-router";
import SideBar from "./SideBar";
import ActionModal from "../../components/global/ActionModal/ActionModal";
import styles from "./_styles.module.scss";
import Headers from "./Header";

const UserLayout = () => {
  return (
    <div className={styles.user__layout}>
      <SideBar />
      <main>
        <Headers />
        <div className={styles.user__layout__main}>
          <Outlet />
        </div>
      </main>

      <ActionModal />
    </div>
  );
};

export default UserLayout;
