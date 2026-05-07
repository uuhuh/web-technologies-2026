import { AsteroidController } from "../../AsteroidController"
import { AsteroidsCard } from "../asteroid-card/AsteroidCard"
import { AsteroidFilters } from "../asteroids-filters/AsteroidFilters"
import {useState} from 'react'

export const AsteroidsList = () => {
    const [isOnlyDanger, setIsOnlyDanger] = useState(false)
    
    const [isKilometers, setKilometers] = useState(true)

    const [asteroids, setAsteroids] = useState(AsteroidController.getAsteroids())

    return(
        <div>
            <AsteroidFilters 
                isOnlyDanger={isOnlyDanger} 
                setIsOnlyDanger={setIsOnlyDanger}
                isKilometers={isKilometers} 
                setKilometers={setKilometers} 
            />
            {isOnlyDanger ? asteroids.filter((it) => it.isDanger).map((it) => 
            <AsteroidsCard
                {...it}
                isKilometers={isKilometers}
                setKilometers={setKilometers}
            />)
                : asteroids.map((it) => 
                <AsteroidsCard 
                    {...it}
                    isKilometers={isKilometers}
                    setKilometers={setKilometers}
                />
            )}
        </div>
    )
}