import { ChartCard } from "../../../shared/ui/chartCard";
import styles from "../ChartList.module.css";
import { IChartListProps } from "../config/types";

export const ChartList = ({chartListData}: IChartListProps) => {
    return (
        <ul className={styles.list}>
            {chartListData.map((data, index) => {
                return (
                    <ChartCard key={index} {...data} />
                )
            })}
        </ul>
    )
}
