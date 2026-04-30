import styles from "./AsteroidAction.module.css"

export const AsteroidAction = ()=>{
    return <div className={styles.container}>
        <div>Оценка</div>
        <div>Не опасен</div>
        <button className={styles.button}>На уничтожение</button>
    </div>
}