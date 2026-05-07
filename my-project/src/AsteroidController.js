export class AsteroidController {
    static getAsteroids(){
        
        return asteroids
    }
}

const asteroids = [
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
]