import { useParams } from "react-router"
import { useEffect, useState, useContext } from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { AsteroidController } from "../AsteroidController"
import { AsteroidData } from "../components/asteroid-card/AsteroidData";
import styles from "./AsteroidPage.module.css";
import { AsteroidsContext } from "../contexts/AsteroidsContext";

export const AsteroidPage = () => {
    const { asteroidId } = useParams()
    const [asteroid, setAsteroid] = useState([])
    const { state, dispatch } = useContext(AsteroidsContext)
    const { isKilometers } = state

    const setKilometers = (value) => {
        dispatch({ type: "SET_KILOMETERS", payload: value })
    }

    useEffect(() => {
        AsteroidController.getAsteroidById(asteroidId).then((result) => {
            setAsteroid(result);
        })
    }, [asteroidId])

    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.card}>
                <AsteroidData
                    name={asteroid.name}
                    distance={asteroid.distance}
                    diameter={asteroid.diameter}
                    date={asteroid.date}
                    isKilometers={isKilometers}
                    setKilometers={setKilometers}
                />
                <div className={styles.detailsSection}>
                    <div className={styles.detailsTitle}>Детали сближения</div>
                    <div className={styles.detailsGrid}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Впервые зарегистрирован:</span>
                            <span className={styles.detailValue}>{asteroid.firstApproach}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Относительная скорость:</span>
                            <span className={styles.detailValue}>{asteroid.velocity} км/с</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Орбита:</span>
                            <span className={styles.detailValue}>{asteroid.orbitingBody || "Земля"}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Расстояние в Лунных дистанциях:</span>
                            <span className={styles.detailValue}>{asteroid.lunarDistance} LD</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Дата и время сближения:</span>
                            <span className={styles.detailValue}>{asteroid.closeApproachFull}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Абсолютная звёздная величина:</span>
                            <span className={styles.detailValue}>{asteroid.absoluteMagnitude} H</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}