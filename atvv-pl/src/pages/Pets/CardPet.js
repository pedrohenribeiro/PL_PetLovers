import PropTypes from 'prop-types'
import styles from './CardPet.module.css'
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CardPet({numero,nome,tipo,raca,genero,nomeDono,cpfDono,DeletarPet,AbrirModal}){
    return(
        <div className={styles.cardList}> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.cardId}>
                <p className={styles.cardIdConteudo}>{numero}</p>            
            </div> 
            <div className={styles.cardTitulo}>            
                <h3>{nome}</h3>
            </div>
                <div>
                <div className={styles.cardConteudo}>                 
                    <b>Tipo:</b>
                    <p className={styles.informacoes}> {tipo}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Raça:</b>
                    <p className={styles.informacoes}> {raca}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Genero:</b>
                    <p className={styles.informacoes}> {genero}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Dono:</b>
                    <p className={styles.informacoes}> {nomeDono}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>CPF:</b>
                    <p className={styles.informacoes}> {cpfDono}</p>
                </div>
            </div>


            <div className={styles.cardBotoes}>
                <button className='botao-editar'>
                    <FiEdit 
                        size={28} 
                        title="Editar"
                        onClick={(e) => AbrirModal(numero,nome,tipo,raca,genero,nomeDono,cpfDono)}
                        />
                </button>

                <button className='botao-deletar'>
                    <IoIosRemoveCircleOutline 
                        size={32} 
                        title="Apagar"
                        onClick={(e) => DeletarPet(numero)}
                    />
                </button>
            </div>

        </div>
    )
}
CardPet.propTypes = {
    nome: PropTypes.string.isRequired,
    tipo: PropTypes.number,
}

CardPet.defaultProps = {
    nome: 'Faltou a nome',
    tipo: 0,
}
export default CardPet