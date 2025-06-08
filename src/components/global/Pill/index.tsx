import styles from "./_styles.module.scss";

type PillProps = {
  color: "green" | "red" | "grey" | "purple";
  size?: "small" | "medium" | "big";
  text: string;
  onClick?: () => void;
  useDot?: boolean;
};

const Pill = ({
  text,
  color,
  size = "small",
  onClick,
  useDot = true,
}: PillProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.pill} ${styles[color]} ${styles[size]}`}
    >
      {useDot && <span />}
      {text}
    </div>
  );
};

export default Pill;
