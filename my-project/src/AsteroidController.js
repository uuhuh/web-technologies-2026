export class AsteroidController {
    static async getAsteroids(){
        const today = new Date().toISOString().slice(0, 10);
        const url = `https://neows-proxy.vercel.app/api/asteroids?start_date=${today}&end_date=${today}&detailed=false`;

        try {
            const response = await fetch(url)
            const data = await response.json()

            const asteroidsData = data.near_earth_objects?.[today]
            if (!asteroidsData) return []

            return asteroidsData.map(AsteroidController.mapAsteroid).filter(ast => ast !== null)
        } catch (error) {
            console.error('Ошибка загрузки астероидов:', error)
            return []
        }
    }

    static async getAsteroidById(asteroidId){
        const url = `https://neows-proxy.vercel.app/api/asteroids/${asteroidId}`
        const response = await fetch(url)
        const data = await response.json()
        return AsteroidController.mapSingleAsteroid(data)
    }

    static mapAsteroid(asteroid){
        return{
            id: asteroid.neo_reference_id,
            name: asteroid.name,
            isDanger: asteroid.is_potentially_hazardous_asteroid,
            distance: asteroid.close_approach_data[0].miss_distance.kilometers,
            diameter: ((asteroid.estimated_diameter.kilometers.estimated_diameter_max + asteroid.estimated_diameter.kilometers.estimated_diameter_min)/2) * 1000,
            date: asteroid.close_approach_data[0].close_approach_date
        }
    }

    static mapSingleAsteroid(asteroid) {

        const approach = asteroid.close_approach_data[0]
        const approaches = asteroid.close_approach_data

        const today = new Date().toISOString().slice(0, 10)
        const todayApproach = approaches.find(ap => ap.close_approach_date === today);

        console.log(">>>>>", approach)

        
        return {
            id: asteroid.neo_reference_id,
            name: asteroid.name,
            firstApproach: approach.close_approach_date,
            distance: todayApproach.miss_distance.kilometers,
            diameter: ((asteroid.estimated_diameter.kilometers.estimated_diameter_max + asteroid.estimated_diameter.kilometers.estimated_diameter_min)/2) * 1000,
            date: todayApproach.close_approach_date,
            velocity: todayApproach.relative_velocity.kilometers_per_second,
            orbitingBody: todayApproach.orbiting_body,
            lunarDistance: todayApproach.miss_distance.lunar,
            closeApproachFull: todayApproach.close_approach_date_full,
            absoluteMagnitude: asteroid.absolute_magnitude_h
        };
    }
}
/*const asteroids = [
    {
        name: "First asteroid",
        isDanger: false,
        distance: 23500,
        diameter: 250,
        date: "15 мая 2024 года"
    },
    {
        name: "Second asteroid",
        isDanger: true,
        distance: 159000,
        diameter: 730,
        date: "12 июля 2021 года"
    },
    {
        name: "Third asteroid",
        isDanger: true,
        distance: 78000,
        diameter: 50,
        date: "13 декабря 2025 года"
    }
]*/