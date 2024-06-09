import PropTypes from 'prop-types'
import styles from './CardPet.module.css'
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CardPet({numero,nome,tipo,raca,genero,dono,DeletarPet,AbrirModal}){
    return(
        <div className={styles.cardList}> 
            <div className={styles.cardId}>
                <p className={styles.cardIdConteudo}>{numero}</p>            
            </div> 
            <div className={styles.cardTitulo}>            
                <p>{nome}</p>
            </div>
                <div>
                <div className={styles.cardConteudo}>                 
                    <p>Tipo: {tipo}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <p>Raça: {raca}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <p>Genero: {genero}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <p>Dono: {dono}</p>
                </div>
            </div>


            <div className={styles.cardBotoes}>
                <button className='botao-editar'>
                    <FiEdit 
                        size={28} 
                        title="Editar"
                        onClick={(e) => AbrirModal(numero,nome,tipo,raca,genero,dono)}
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