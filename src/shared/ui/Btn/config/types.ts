import { ButtonHTMLAttributes } from "react";

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc?: string;
  iconAlt?: string;
  variant?: "transparent" | "primary";
  className?: string;
};
