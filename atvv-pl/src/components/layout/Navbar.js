import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import { MdOutlinePets } from "react-icons/md";
import { FaHandHoldingMedical,FaRegNewspaper } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
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
                    <Link to="/servicos" className={styles.botao}>
                        <FaHandHoldingMedical className={styles.icone}/>
                        <b>Serviços</b>
                    </Link>       
                </li>
                <li className={styles.itemLista}>
                    <Link to="/produtos" className={styles.botao}>
                        <FaBoxOpen className={styles.icone}/>
                        <b>Produtos</b>
                    </Link>
                </li>
                <li className={styles.itemLista}>
                    <Link to="/pets" className={styles.botao}>
                        <MdOutlinePets className={styles.icone}/>
                        <b>Pets</b>
                    </Link>
                </li>
                <li className={styles.itemLista}>
                    <Link to="/estatisticas" className={styles.botao}>
                        <AiOutlineSchedule className={styles.icone}/>
                        <b>Estatisticas</b>
                    </Link>
                </li>
                <li className={styles.itemLista}>
                    <Link to="/cadastrar" className={styles.botao}>
                        <FaRegNewspaper className={styles.icone}/>
                        <b>Cadastrar</b>
                    </Link>
                </li>
                <li className={styles.itemLista}>
                    <Link to="/compras" className={styles.botao}>
                        <RiShoppingBasketLine className={styles.icone}/>
                        <b>Comprar</b>
                    </Link>
                </li>
          

            </ul>
        </div>
    )
}

export default Navbar