import { TextareaHTMLAttributes } from "react";

export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange"
> & {
  placeholder?: string;
  onChange: (value: string) => void;
};
