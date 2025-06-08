import { useLocation } from "react-router";
import { navSections } from "../SideBar/data";
import styles from "./_styles.module.scss";
import ChevronIcon from "@/assets/icons/chevron-icon";
import { useMemo } from "react";
import { Bell, CircleUser, Search, SunMoon } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const currentIcon = useMemo(() => {
    let match = navSections.find(
      (nav) => nav.href && location.pathname.startsWith(nav.href)
    );

    if (!match) {
      for (const parent of navSections) {
        if (parent.subLinks) {
          const subMatch = parent.subLinks.find((sub) =>
            location.pathname.startsWith(sub.href)
          );
          if (subMatch) {
            match = parent;
            break;
          }
        }
      }
    }

    return match;
  }, [location.pathname]);

  return (
    <div className={styles.user__layout__header}>
      <div className={styles.user__layout__breadcrumbs}>
        <span>{currentIcon?.icon && currentIcon.icon}</span>
        <ChevronIcon styles={{ rotate: "270deg" }} />
        <p>{currentIcon?.label}</p>
      </div>
      <div className={styles.user__layout__searchbar}>
        <Search className={styles.user__layout__searchbar__icon} />
        <input type="text" placeholder="Search" className={styles.input} />
      </div>
      <div className={styles.user__layout__auth}>
        <div className={styles.user__layout__auth__notification}>
          <SunMoon size={22} style={{ marginTop: "5px" }} />
          <Bell size={22} style={{ marginTop: "5px" }} />
        </div>
        <div className={styles.user__layout__auth__profile}>
          <CircleUser size={26} className={styles.icon} />
          <div className={styles.user__layout__auth__profile__details}>
            <p className={styles.user__layout__auth__profile__username}>
              {"John Doe"}
            </p>
            <p className={styles.user__layout__auth__profile__role}>{"User"}</p>
          </div>
          <button>
            <ChevronIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
