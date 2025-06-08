import ReactSwitch from "react-switch";
import styles from "./_styles.module.scss";

type ToggleProps = {
  id: string | number;
  checked: boolean;
  offColor?: string;
  onColor?: string;
  onChange: (value: boolean) => void;
  isDisabled?: boolean;
  height?: number;
  width?: number;
};

const Toggle = ({
  id,
  checked = false,
  isDisabled = false,
  offColor = "#cdcdcd",
  onColor = "#1b7232",
  onChange,
  height = 18,
  width = 40,
}: ToggleProps) => {
  return (
    <div className={styles.switch}>
      <ReactSwitch
        disabled={isDisabled}
        id={`status ${id || ""}`}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={offColor}
        onColor={onColor}
        onChange={onChange}
        height={height}
        width={width}
        handleDiameter={height}
        boxShadow="0px 0px 2px 1px #aaaaaa"
      />
    </div>
  );
};

export default Toggle;
