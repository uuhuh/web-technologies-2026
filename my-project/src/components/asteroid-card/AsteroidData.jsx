import styles from "./AsteroidData.module.css"

export const AsteroidData = ()=> {
    return <div className={styles.container} style={{backgroundImage: "url(/asteroid-big.png", backgroundRepeat: "no-repeat"}}>
        <div>Dino</div>
        <div>    
            <div>AsteroidName</div>
            <div>
                <div>Distance</div>
                <div>Diameter</div>
                <div>Date</div>
            </div>
        </div>
    </div>
}