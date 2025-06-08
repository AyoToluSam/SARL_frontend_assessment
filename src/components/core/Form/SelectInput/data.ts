import type { StylesConfig } from "react-select";

export const formatReactSelectStyles: StylesConfig = {
  container: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    minHeight: "fit-content",
    backgroundColor: state.isDisabled ? "transparent" : "transparent",
    width: "100%",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    border: "none",
    outline: "none",
    fontWeight: 500,
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    margin: 0,
    padding: 0,
    border: "none",
    outline: "none",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#667085",
    fontFamily: "Inter",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    marginTop: "1.2rem",
    color: "#101828",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#eef6f0" : "white",
    color: "#101828",
    fontWeight: 500,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    position: "relative",
    right: "1rem",
    bottom: "0.8rem",
    color: "#667085",
    cursor: "pointer",
  }),
  clearIndicator: () => ({
    position: "relative",
    right: "2.5rem",
    bottom: "0.8rem",
    color: "#667085",
    cursor: "pointer",
  }),
};
