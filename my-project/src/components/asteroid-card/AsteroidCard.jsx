import { AsteroidAction } from "./AsteroidAction"
import styles from "./AsteroidCard.module.css"
import { AsteroidData } from "./AsteroidData"
import { Link } from "react-router"

export const AsteroidsCard = (props) => {

    const {isDanger, name, distance, diameter, date, isKilometers, setKilometers, id} = props

    return (
        <Link to={`asteroids/${id}`}>
        <div className={isDanger ? styles.containerDanger : styles.container}>
            <AsteroidData
                name = {name} 
                distance={distance} 
                diameter={diameter} 
                date={date}
                isKilometers={isKilometers}
                setKilometers={setKilometers}
            />
            <AsteroidAction isDanger={isDanger}/>
        </div>
        </Link>
    )
}