import { memo } from "react";
import styles from "../Btn.module.css";
import { BtnProps } from "../config/types";
import classNames from "classnames";

export const Btn = memo(({ children, iconSrc, iconAlt, variant, onClick, className, ...props }: BtnProps) => {
	const classes = classNames(styles.btn, className, {
		[styles.transparent]: variant === "transparent",
		[styles.primary]: variant === "primary",
	})
	return (
		<button className={classes} onClick={onClick} {...props}>
			{iconSrc && <img className={styles.img} src={iconSrc} alt={iconAlt} />}
			{children}
		</button>
	)
})
