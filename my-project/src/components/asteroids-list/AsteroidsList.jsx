import { AsteroidController } from "../../AsteroidController"
import { AsteroidsCard } from "../asteroid-card/AsteroidCard"
import { AsteroidFilters } from "../asteroids-filters/AsteroidFilters"
import {useEffect, useState} from 'react'

export const AsteroidsList = () => {
    const [isOnlyDanger, setIsOnlyDanger] = useState(false)
    
    const [isKilometers, setKilometers] = useState(true)

    const [asteroids, setAsteroids] = useState([])

    useEffect(() => {
        AsteroidController.getAsteroids().then((result)=> {
            setAsteroids(result);
        })
    }, [])

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