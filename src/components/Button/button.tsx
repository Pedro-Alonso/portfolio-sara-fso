import { ButtonProps } from "./button.types";
import styles from "./button.styles.module.css";

export const Button = ({
  type,
  size,
  text,
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  const getClassName = () => {
    return [
      styles.button,
      styles[type],
      styles[size],
      isDisabled ? styles.disabled : "",
    ]
      .join(" ")
      .trim();
  };

  return (
    <button className={getClassName()} onClick={onClick}>
      {text}
    </button>
  );
};
