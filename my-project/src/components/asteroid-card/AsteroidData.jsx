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


export const AsteroidData = ()=> {

    const diameter = 10


    return <div
        className={styles.container}
        style={
            getAsteroidImage(150)
        }
    >
        <div>Dino</div>
        <div>    
            <div>AsteroidName</div>
            <div>
                <div>Distance</div>
                <div>Diameter   {diameter}</div>
                <div>Date</div>
            </div>
        </div>
    </div>
}