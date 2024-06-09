import PropTypes from 'prop-types'
import styles from './CardServico.module.css'
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CardServico({numero,nome,valor,deletarServico,abrirModal}){
    return(
        <div className={styles.cardList}> 
            <div className={styles.cardId}>
                <p className={styles.cardIdConteudo}>{numero}</p>            
            </div> 
            <div className={styles.cardTitulo}>            
                <p>{nome}</p>
            </div>
            <div className={styles.cardConteudo}>                 
                <p>Valor: R${valor}</p>
            </div>

            <div className={styles.cardBotoes}>
                <button className='botao-editar'>
                    <FiEdit 
                        size={28} 
                        itle="Editar"
                        onClick={(e) => abrirModal(numero,nome,valor)}
                    />
                </button>

                <button className='botao-deletar'>
                    <IoIosRemoveCircleOutline 
                        size={32} 
                        title="Apagar"
                        onClick={(e) => deletarServico(numero)}
                    />
                </button>
            </div>

        </div>
    )
}
CardServico.propTypes = {
    nome: PropTypes.string.isRequired,
    valor: PropTypes.number,
}

CardServico.defaultProps = {
    nome: 'Faltou a nome',
    valor: 0,
}
export default CardServico