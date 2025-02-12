import classNames from "classnames";
import styles from "../Header.module.css";
import { HeaderBtnProps } from "../config/types";

export const HeaderBtn = ({ activeBlockType, activeBlock, children, handleClick, className }: HeaderBtnProps) => {
    return (
        <button className={classNames(
            styles.headerBtn,
            className, activeBlock === `${activeBlockType}` ? styles.active : "")
        }
            onClick={handleClick}>
            {children}
        </button>
    )
}
