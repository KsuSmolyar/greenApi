import { ButtonHTMLAttributes } from "react";

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc?: string;
  iconAlt?: string;
};
