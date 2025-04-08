const ButtonTypes = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;
export type ButtonTypes = (typeof ButtonTypes)[keyof typeof ButtonTypes];

const ButtonSizes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;
export type ButtonSizes = (typeof ButtonSizes)[keyof typeof ButtonSizes];

export type ButtonProps = {
  type: ButtonTypes;
  size: ButtonSizes;
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
};
