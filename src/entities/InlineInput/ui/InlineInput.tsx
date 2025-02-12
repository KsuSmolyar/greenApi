import { ChangeEvent, useRef, useState } from "react";
import styles from "../InlineInput.module.css";
import { CheckMark, Pencil } from "../../../shared/ui/Icons";
import { InlineInputProps } from "../config/types";
import classNames from "classnames";

export const InlineInput = ({ value, handleInputChange, label, handleEditedClick }: InlineInputProps) => {
    const [isEdited, setIsEdited] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setIsEdited((prev) => {
            if (handleEditedClick && prev) {
                handleEditedClick();
            }
            if (!prev) {
                setTimeout(() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }, 100)
            }
            return !prev
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        handleInputChange(value)
    }

    return (
        <div className={classNames(styles.inlineInput, { [styles.isEdited]: isEdited })}>
            {label && <span className={styles.inlineInputLabel}>{label}</span>}
            <div className={styles.inlineInputBlock}>
                {isEdited ?
                    <input ref={inputRef} className={styles.inlineInputEl} onChange={handleChange} value={inputValue} /> :
                    <span className={styles.inlineInputValue}>{value}</span>
                }
                <button className={styles.inlineInputBtn} onClick={handleClick}>
                    {isEdited ? <CheckMark /> : <Pencil />}
                </button>
            </div>

        </div>
    )
}
