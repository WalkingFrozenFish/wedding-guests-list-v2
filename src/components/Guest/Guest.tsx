import styles from "./Guest.module.css"

interface IProps {
    id: string,
    guestsCount: number,
    incoming: string,
    message: string,
    name: string
}

function Guest(props: IProps) {
    return (
        <div className={styles.guestCard}>
            <h2 className={styles.name}>ФИО - {props.name}</h2>
            <p className={styles.incoming}>Придет или нет - {props.incoming}</p>
            <p className={styles.guestsCount}>Количество гостей - {props.guestsCount}</p>
            <p className={styles.message}>{props.message ? "Сообщение от гостя - " + props.message : "Гость не оставил сообщение"}</p>
        </div>
    );
}

export default Guest;