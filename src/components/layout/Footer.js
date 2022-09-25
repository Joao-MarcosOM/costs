import styles from "./Footer.module.css"
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

function Footer(){
    return(
        <div className={`${styles.footer}`}>
            <footer>
                <div className={styles.teste}>
                    <div className={styles.esquerda}>
                    <ul className={styles.social_list}>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className={styles.copy_right}><span>Costs </span> &copy; 2022 </p>
                    </div>     
                </div>         
            </footer>
        </div>
    )
}

export default Footer