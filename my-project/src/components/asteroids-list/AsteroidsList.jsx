import { AsteroidsCard } from "../asteroid-card/AsteroidCard"
import { AsteroidFilters } from "../asteroids-filters/AsteroidFilters"
import { useContext } from 'react'
import { AsteroidsContext } from "../../contexts/AsteroidsContext"

export const AsteroidsList = () => {
    const { state, dispatch } = useContext(AsteroidsContext)
    const { asteroids, isOnlyDanger, isKilometers } = state

    const setKilometers = (value) => {
        dispatch({ type: "SET_KILOMETERS", payload: value })
    }

    const filteredAsteroids = isOnlyDanger
        ? asteroids.filter(it => it.isDanger)
        : asteroids

    return (
        <div>
            <AsteroidFilters />
            {filteredAsteroids.map(asteroid => (
                <AsteroidsCard
                    key={asteroid.id}
                    {...asteroid}
                    isKilometers={isKilometers}
                    setKilometers={setKilometers}
                />
            ))}
        </div>
    )
}