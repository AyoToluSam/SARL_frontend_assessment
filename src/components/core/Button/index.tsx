import { ButtonHTMLAttributes, ReactNode } from "react";
import { actionLoading } from "../../../assets";
import styles from "./_styles.module.scss";
import { Plus } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?:
    | "main"
    | "alt"
    | "grey"
    | "red"
    | "text"
    | "underlined"
    | "children";
  width?: "full" | "fit" | number;
  size?: "small" | "medium" | "big";
  useIcon?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const Button = ({
  type = "button",
  variant = "main",
  width = "fit",
  size = "medium",
  text = "Button",
  useIcon,
  icon,
  iconPosition = "left",
  isLoading,
  isDisabled,
  className,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} ${styles[variant]} ${styles[size]} ${styles[iconPosition]} ${
        width && typeof width !== "number" && styles[width]
      } `}
      style={{ width: typeof width === "number" ? `${width}px` : undefined }}
      {...restProps}
      disabled={isDisabled || isLoading}
    >
      {children ||
        (isLoading ? (
          <img
            className={styles.loading}
            src={actionLoading}
            alt="loading"
          ></img>
        ) : (
          <>
            {(useIcon || icon) && (
              <span className={styles.icon}>{icon ?? <Plus size={18} />}</span>
            )}
            {text}
          </>
        ))}
    </button>
  );
};
export default Button;
