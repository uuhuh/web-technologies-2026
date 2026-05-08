import styles from "./AsteroidFilters.module.css";
import { useContext } from 'react'
import { AsteroidsContext } from "../../contexts/AsteroidsContext"

export const AsteroidFilters = () => {
    const { state, dispatch } = useContext(AsteroidsContext)
    const { isOnlyDanger, isKilometers } = state

    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    id="dangerous-filter"
                    checked={isOnlyDanger}
                    onChange={() => dispatch({ type: "TOGGLE_DANGER_FILTER" })}
                />
                <label htmlFor="dangerous-filter">Показать только опасные</label>
            </div>
            <div className={styles.distanceSelector}>
                Расстояние{" "}
                <span className={isKilometers && styles.selected} onClick={() => dispatch({ type: "SET_KILOMETERS", payload: true })}>
                    в километрах
                </span>
                {", "}
                <span className={!isKilometers && styles.selected} onClick={() => dispatch({ type: "SET_KILOMETERS", payload: false })}>
                    в дистанциях от Луны
                </span>
            </div>
        </div>
    )
}