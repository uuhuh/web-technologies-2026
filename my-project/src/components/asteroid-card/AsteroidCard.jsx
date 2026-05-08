import { AsteroidAction } from "./AsteroidAction"
import styles from "./AsteroidCard.module.css"
import { AsteroidData } from "./AsteroidData"
import { Link } from "react-router"
import { useContext } from "react"
import { AsteroidsContext } from "../../contexts/AsteroidsContext"

export const AsteroidsCard = (props) => {

    const { isDanger, name, distance, diameter, date, isKilometers, setKilometers, id } = props
    const { state } = useContext(AsteroidsContext)

    const asteroid = { id, name, distance, diameter, date, isDanger }
    const isAdded = state.destroyment.some(a => a.id === id)

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
                <AsteroidAction isDanger={isDanger} asteroid={asteroid} isAdded={isAdded} />
            </div>
        </Link>
    )
}