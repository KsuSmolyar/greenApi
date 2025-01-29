import classNames from "classnames";
import styles from "../../styles/Main.module.css";
import { Header } from "../entities/header"
import { ChartBlock } from "../widgets/chartBlock"
import { Chart } from "../widgets/chart";

export const Main = () => {
    return (
        <div className={styles.mainPage}>
            <div className={classNames(styles.container, "container")}>
                <Header />
                <ChartBlock />
                <Chart isEmpty={false} />
            </div>
            
        </div>
        
    )
}
