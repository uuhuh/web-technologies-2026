import styles from "./AsteroidAction.module.css"
import { useContext } from "react"
import { AsteroidsContext } from "../../contexts/AsteroidsContext"

export const AsteroidAction = ({ isDanger, asteroid, isAdded }) => {
    const { dispatch } = useContext(AsteroidsContext)

    const handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        
        if (isAdded) {
            dispatch({ type: "REMOVE_DESTROYMENT", payload: asteroid.id })
        } else {
            dispatch({ type: "ADD_DESTROYMENT", payload: asteroid })
        }
    }

    return (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <div>Оценка</div>
            <div>{isDanger ? "Опасен" : "Не опасен"}</div>
            <button className={styles.button} onClick={handleClick}>
                {isAdded ? "Отобран" : "На уничтожение"}
            </button>
        </div>
    )
}