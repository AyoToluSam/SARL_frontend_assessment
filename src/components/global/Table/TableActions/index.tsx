import { Eye, Pencil, Trash } from "lucide-react";
import { capitalize } from "lodash";
import styles from "./_styles.module.scss";
import Button from "../../../../components/core/Button";

type TableActionsProps = {
  actions: {
    variant?: "icon" | "text";
    type: "view" | "edit" | "delete" | "custom";
    clickAction: () => void | Promise<void>;
    isDisabled?: boolean;
    customText?: string;
    customIcon?: React.ReactNode;
    color?: string;
  }[];
};

const TableActions = ({ actions }: TableActionsProps) => {
  const icons = {
    view: (clickAction?: () => void | Promise<void>, color?: string) => (
      <Eye size={20} color={color} onClick={clickAction} />
    ),
    edit: (clickAction?: () => void | Promise<void>, color?: string) => (
      <Pencil size={20} color={color} onClick={clickAction} />
    ),
    delete: (clickAction?: () => void | Promise<void>, color?: string) => (
      <Trash size={20} color={color} onClick={clickAction} />
    ),
    custom: (
      clickAction?: () => void | Promise<void>,
      color?: string,
      customIcon?: React.ReactNode
    ) => (
      <span onClick={clickAction} style={{ cursor: "pointer", color }}>
        {customIcon}
      </span>
    ),
  };

  return (
    <div className={styles.table_actions}>
      {actions.map(
        ({
          type,
          clickAction,
          isDisabled,
          color,
          variant = "icon",
          customText,
          customIcon,
        }) => {
          const actionIcon = icons[type];

          return variant === "text" ? (
            <Button
              key={type + customText}
              variant="text"
              size="small"
              text={customText || capitalize(type)}
              style={{
                cursor: isDisabled ? "not-allowed" : "pointer",
                opacity: isDisabled ? 0.8 : 1,
                color,
              }}
              onClick={isDisabled ? undefined : clickAction}
              disabled={isDisabled}
            />
          ) : (
            <span
              key={type}
              className={`${styles.icon} ${isDisabled ? styles.disabled : undefined}`}
            >
              {actionIcon(
                isDisabled ? undefined : clickAction,
                color,
                customIcon
              )}
            </span>
          );
        }
      )}
    </div>
  );
};

export default TableActions;
