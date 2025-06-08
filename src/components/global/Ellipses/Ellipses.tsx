import { MutableRefObject } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import styles from "./_Ellipses.module.scss";
import { EllipsisVertical, LucideIcon } from "lucide-react";

type Action = {
  title: string;
  icon?: LucideIcon;
  action: (title?: string) => void;
};

type EllipsesProps = {
  actions: [Action, ...Action[]];
  menuPosition?:
    | "top_left"
    | "top_center"
    | "top_right"
    | "bottom_left"
    | "bottom_center"
    | "bottom_right";
};

const Ellipses = ({
  actions,
  menuPosition = "bottom_right",
}: EllipsesProps) => {
  const { open, setOpen, dropdownRef } = useClickOutside();
  return (
    <div
      ref={dropdownRef as MutableRefObject<HTMLDivElement>}
      className={styles.ellipses_container}
    >
      <EllipsisVertical
        size={24}
        onClick={() => setOpen(!open)}
        className={styles.icon}
      />
      {open && (
        <ul className={styles[menuPosition]}>
          {actions.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} onClick={() => item.action(item.title)}>
                {Icon && <Icon size={14} />} {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Ellipses;
