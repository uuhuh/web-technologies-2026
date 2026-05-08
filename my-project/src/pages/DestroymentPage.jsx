import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import styles from "./DestroymentPage.module.css"
import { useContext } from "react"
import { AsteroidsContext } from "../contexts/AsteroidsContext"
import { AsteroidData } from "../components/asteroid-card/AsteroidData"

export const DestroymentPage = () => {
    const { state, dispatch } = useContext(AsteroidsContext)
    const { destroyment, isKilometers } = state

    const removeFromDestroyment = (id) => {
        dispatch({ type: "REMOVE_DESTROYMENT", payload: id })
    }

    const setKilometers = (value) => {
        dispatch({ type: "SET_KILOMETERS", payload: value })
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h2>Список астероидов на уничтожение</h2>
                {destroyment.length === 0 ? (
                    <p>Пока нет астероидов, отправленных на уничтожение.</p>
                ) : (
                    <div className={styles.list}>
                        {destroyment.map(asteroid => (
                            <div key={asteroid.id} className={styles.card}>
                                <AsteroidData
                                    name={asteroid.name}
                                    distance={asteroid.distance}
                                    diameter={asteroid.diameter}
                                    date={asteroid.date}
                                    isKilometers={isKilometers}
                                    setKilometers={setKilometers}
                                />
                                <button 
                                    className={styles.removeButton}
                                    onClick={() => removeFromDestroyment(asteroid.id)}
                                >
                                    Отменить уничтожение
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}