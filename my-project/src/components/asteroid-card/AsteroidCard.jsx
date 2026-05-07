import { AsteroidAction } from "./AsteroidAction"
import styles from "./AsteroidCard.module.css"
import { AsteroidData } from "./AsteroidData"

export const AsteroidsCard = () => {

    const isDanger = true

    return (
        <div className={isDanger ? styles.containerDanger : styles.container}>
            <AsteroidData />
            <AsteroidAction />
        </div>
    )
}