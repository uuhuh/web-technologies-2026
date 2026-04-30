import { AsteroidAction } from "./AsteroidAction"
import styles from "./AsteroidCard.module.css"
import { AsteroidData } from "./AsteroidData"

export const AsteroidsCard = () => {
    return (
        <div className={styles.container}>
            <AsteroidData />
            <AsteroidAction />
        </div>
    )
}