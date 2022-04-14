import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';



const Navbar = ({ logout }) => {
    return(
        <Container className={styles.navbar}>
        <div className={styles.logo}>
            <Link to="/home" className={styles.link}><span>Ersen's Kitchen </span> RECIPE</Link>
            </div>
            <div className={styles.buttons}>
            <Link to="/about" className={styles.link}>ABOUT</Link>
            <a href="https://github.com/ersenozturk" target='_blank' rel="noopener noreferrer" className={styles.link}>GITHUB</a>
            <Link to="/" className={styles.link} onClick={logout} >LOGOUT</Link>
            </div>
        </Container>
    )
}

export default Navbar;