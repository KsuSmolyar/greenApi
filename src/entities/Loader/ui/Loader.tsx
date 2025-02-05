import classNames from "classnames";
import { LockEl } from "../../../shared/ui/LockEl";
import { LoaderPropsType } from "../config/types";
import styles from "../Loader.module.css";

export const Loader = ({ imgSrc, imgAlt, isDone }: LoaderPropsType) => {

    return (
        <div className={styles.loader}>
            <img src={imgSrc} alt={imgAlt} width={92} height={92} />
            <span className={classNames(styles.loaderIndicator, {
                [styles.isLoaderDone]: isDone
            })}></span>
            <LockEl />
        </div>
    )
}
