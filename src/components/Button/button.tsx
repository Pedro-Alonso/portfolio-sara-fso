import { ButtonProps } from "./button.types";
import styles from "./button.styles.module.css";

export const Button = ({
  type,
  size,
  text,
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[type],
    styles[size],
    isDisabled && styles.disabled,
    ,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};
