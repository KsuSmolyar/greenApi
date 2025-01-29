import { InputHTMLAttributes } from "react"

export type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

export type InputRef = {
  focus: () => void;
  blur: () => void;
};
