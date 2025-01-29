import { ChartList } from "../../../entities/chartList";
import styles from "../ChartBlock.module.css";
import ava from "/ava.jpg";


const chartListData = [
    {
      imgSrc: ava,
      name: "Вася",
      text: "Привет",
      time: "9:08",
      unreadCount: 0
    },
    {
      imgSrc: ava,
      name: "Вася",
      text: "Привет",
      time: "9:08",
      unreadCount: 0
    },
    {
      imgSrc: ava,
      name: "Вася",
      text: "Привет! Как твои дела? Рад тебя видеть в хорошем настроении, надеюсь увидимся",
      time: "9:08",
      unreadCount: 1
    },
    {
      imgSrc: ava,
      name: "Вася",
      text: "Привет",
      time: "9:08",
      unreadCount: 2
    },
    {
      imgSrc: ava,
      name: "Вася",
      text: "Привет",
      time: "9:08",
      unreadCount: 0
    }
  ]
export const ChartBlock = () => {
    return (
        <div className={styles.chartBlock}>
           <ChartList chartListData={chartListData} />
        </div>
    )
}
