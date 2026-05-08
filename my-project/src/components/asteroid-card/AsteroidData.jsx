import styles from "./AsteroidData.module.css"


const getAsteroidImage = (diameter) => {
    if (diameter > 100 && diameter < 500) {
        return{
            backgroundImage: "url(/asteroid-mid.png)",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "15%",
        }
    }

    if (diameter >= 500){
        return{
            backgroundImage: "url(/asteroid-big.png)",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "8%",
        }
    }

    return {
        backgroundImage: "url(/asteroid-small.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "15%",
        backgroundPositionY: "35%",
    }
}


export const AsteroidData = ({name, distance, diameter, date, isKilometers, setKilometers})=> {

    return(
        <div className={styles.container} style={getAsteroidImage(diameter)}>
        <div className={styles.asteroidIcon}>
            <img src="/dino.png"/>
        </div>
        <div className={styles.info}>   
            <h3>{name}</h3>
            <div className={styles.detail}><span>Дата</span> <span>{date}</span></div>
            <div className={styles.detail}>
                <span>Расстояние</span> 
                <span onClick={() => setKilometers(!isKilometers)} >
                    {isKilometers ? (distance + " км") : (distance / 384400).toFixed(6)}
                </span>
            </div>
            <div className={styles.detail}><span>Размер</span> <span>{diameter} м</span></div>
        </div>
    </div>
    )
}