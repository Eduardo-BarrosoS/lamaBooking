import styles from "./styles.module.css"

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navContainer}>
                <span className={styles.logo}>LamaBooking</span>
                <div className={styles.navItems}>
                    <button className={styles.navButton}>Register</button>
                    <button className={styles.navButton}>Login</button>
                </div>
            </div>


        </div>
    )
}