import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaRegNewspaper } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import logo from "../img/PetLovers.svg"
function Navbar() {
    return (
        <div className={styles.navMenu}>

            <ul className={styles.lista}>
                
                <img src={logo} alt="PetLovers" className={styles.logo}/>
               
                <li className={styles.itemLista}> 
                    <Link to="/" className={styles.botao}>
                        <IoPersonSharp className={styles.icone}/>
                        <b>Clientes</b>
                    </Link>
                </li>
                <li className={styles.itemLista}>
                    <Link to="/cadastrar" className={styles.botao}>
                        <FaRegNewspaper className={styles.icone}/>
                        <b>Cadastrar</b>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar