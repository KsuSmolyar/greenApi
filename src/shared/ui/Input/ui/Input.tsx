import { forwardRef, memo, useImperativeHandle, useRef } from "react";
import { inputProps, InputRef } from "../config/types"
import styles from "../Input.module.css"

export const Input = memo(forwardRef<InputRef,inputProps> (({ placeholder, onFocus, onBlur, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current?.focus();
            },
            blur() {
                inputRef.current?.blur()
            }
        };
    }, []);

    return (
        <input ref={inputRef} className={styles.input} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} {...props} />
    )
}))
