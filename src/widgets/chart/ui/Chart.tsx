import styles from "../Chart.module.css";
import { IChartProps } from "../config/types";
import ava from "../../../../public/ava.jpg";
import arrow from "../../../../public/arrow.svg";
import { TextArea } from "../../../shared/ui/textArea";
import { Btn } from "../../../shared/ui/Btn";


export const Chart = ({isEmpty}: IChartProps) => {
    return (
        <div className={styles.chart}>
            {!isEmpty &&
                <div className={styles.inner}>
                    <header className={styles.header}>
                            <img className={styles.img} src={ava} alt={"аватарка"} />
                            <h4 className={styles.title}>Имя пользователя</h4>
                    </header>
                    <div className={styles.content}>
                           сообщения 
                    </div>
                    <footer className={styles.footer}>
                        <TextArea placeholder={"Введите сообщение"} />
                        <Btn iconSrc={arrow} iconAlt={"стрелка"} type={"submit"} />
                    </footer>
                </div>
            }
        </div>
    )
}
