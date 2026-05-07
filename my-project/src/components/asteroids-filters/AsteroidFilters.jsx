import styles from "./AsteroidFilters.module.css";
import {useState} from 'react'

export const AsteroidFilters = ({isOnlyDanger, setIsOnlyDanger, isKilometers, setKilometers}) => {
    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="dangerous-filter" checked={isOnlyDanger} onClick={()=>{
                    setIsOnlyDanger(!isOnlyDanger)
                }}/>
                <label htmlFor="dangerous-filter">Показать только опасные</label>
            </div>
            <div className={styles.distanceSelector}>
                Расстояние{" "}
                <span className={isKilometers && styles.selected} onClick={()=>setKilometers(true)}>в километрах</span>{", "}
                <span className={!isKilometers && styles.selected} onClick={()=>setKilometers(false)}>в дистанциях от Луны</span>
            </div>
        </div>
    )
}