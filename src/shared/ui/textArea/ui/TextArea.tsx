import { memo, useRef, useState } from "react";
import { useAutosizeTextArea } from "../../../hooks/useAutosizeTextArea";
import { TextAreaProps } from "../config/types";
import styles from "../TextArea.module.css";

export const TextArea = memo(({ placeholder, onChange, ...props }: TextAreaProps) => {
    const [value, setValue] = useState<string>("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
    useAutosizeTextArea(textAreaRef.current, value);
  
    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = evt.target?.value;
  
      onChange(val);
      setValue(val);
    };

    return (
        <textarea className={styles.textArea} ref={textAreaRef} placeholder={placeholder} rows={1} onChange={handleChange} {...props} />     
    )
})
