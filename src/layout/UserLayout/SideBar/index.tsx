import styles from "./_styles.module.scss";
import NavLink from "../../../layout/UserLayout/SideBar/NavLink";
import { LogOut } from "lucide-react";
import { useRef } from "react";
import { navSections } from "@/layout/UserLayout/SideBar/data";

const SideBar = () => {
  const menuRef = useRef<HTMLLIElement>(null);

  return (
    <aside className={styles.aside} ref={menuRef}>
      <div className={styles.logo}>
        <h2>SARL</h2>
      </div>
      <div className={styles.aside__menu__container}>
        <ul>
          {navSections.map((nav, index) => (
            <NavLink
              key={index}
              href={nav.href}
              icon={nav.icon}
              label={nav.label}
              subLinks={nav.subLinks}
            />
          ))}
        </ul>
      </div>

      <div className={styles.aside__footer}>
        <hr />
        <ul>
          <li>
            <button onClick={() => {}}>
              <LogOut />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
