import styles from "../ChartCard.module.css"
import { IChartCard } from "../config/types";
export const ChartCard = (
    {
        imgSrc,
        name,
        time,
        text,
        unreadCount
    }: IChartCard) => {
    return (
        <li className={styles.card}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={imgSrc} alt={"аватарка"} />
            </div>
            <div className={styles.content}>
                <div className={styles.topContent}>
                    <h4 className={styles.title}>{name}</h4>
                    <time className={styles.time}>{time}</time>
                </div>
               
                <div className={styles.bottomContent}>
                    <p className={styles.text}>{text}</p>
                    {unreadCount > 0 &&  <span className={styles.unreadCounter}>{unreadCount}</span>}
                </div>
            </div>
        </li>
    );
}
