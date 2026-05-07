import styles from "./AsteroidAction.module.css"

export const AsteroidAction = ({isDanger})=>{
    return <div className={styles.container}>
        <div>Оценка</div>
        <div>{isDanger ? "Опасен" : "Не опасен"}</div>
        <button className={styles.button}>На уничтожение</button>
    </div>
}