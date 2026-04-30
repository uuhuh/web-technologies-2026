import { AsteroidsCard } from "../asteroid-card/AsteroidCard"

export const AsteroidsList = () => {
    return <div>
        {new Array(4).fill("Asteroid").map(it => (<AsteroidsCard />))}
    </div>
}