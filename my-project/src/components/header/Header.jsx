import { NavLink } from "react-router"
import styles from "./Header.module.css"

export const Header = () => {
    return <div className={styles.container}>
        <NavLink to="/" >Asteroids</NavLink>
        <NavLink to="/destroyment">Destroyment</NavLink>
    </div>
}