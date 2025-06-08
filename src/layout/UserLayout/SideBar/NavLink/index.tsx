import { useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import styles from "./_styles.module.scss";
import { navSectionProps } from "@/layout/UserLayout/SideBar/data";
import ChevronIcon from "@/assets/icons/chevron-icon";

const NavLink = ({
  href,
  icon,
  label,
  subLinks,
}: Omit<navSectionProps, "permissions">) => {
  const location = useLocation();
  const activePath: boolean =
    (!!href && location.pathname.startsWith(href)) ||
    (!href &&
      !!subLinks?.some(
        (link) => link.href && location.pathname.startsWith(link.href)
      ));

  const [isOpen, setIsOpen] = useState(activePath);
  const menuRef = useRef<HTMLLIElement>(null);

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className={`${styles.navlink} ${subLinks && styles.navlink__sublink__active}`}
      ref={menuRef}
    >
      <Link to={href ?? location.pathname}>
        <div
          className={`${styles.navlink__link} ${activePath && styles.navlink__active}`}
        >
          <div className={styles.name}>
            {icon}
            <p>{label}</p>
          </div>
          {subLinks && (
            <ChevronIcon
              isActive={activePath}
              rotate={isOpen}
              styles={{ width: "14px", height: "14px" }}
            />
          )}
        </div>
      </Link>
      {subLinks && isOpen && (
        <div
          className={`${styles.sublink__list}`}
          onClick={(e) => e.stopPropagation()}
        >
          {subLinks?.map((link, index) => {
            const subLinkActive =
              !!link.href && location.pathname.startsWith(link.href);
            return (
              <Link
                to={link.href}
                key={index}
                className={`${styles.sublink} ${styles.navlink} ${subLinkActive && styles.sublink__list__active} ${subLinks.length - 1 === index && styles.sublink__last}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </li>
  );
};

export default NavLink;
