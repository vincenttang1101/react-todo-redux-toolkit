import styles from "./Button.module.scss";
import { getClasses } from "../../utils/getClasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

export const Button = ({ children, type, variant, ...rest }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
};

export const SelectButton = ({ children, ...rest }) => {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
};
