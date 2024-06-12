import PropTypes from 'prop-types'
import styles from './CardProduto.module.css'
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CardProduto({numero,nome,valor,deletarProduto,abrirModal}){
    return(
        <div>
        <div className={styles.cardList}> 
            <div className={styles.cardId}>
                <p className={styles.cardIdConteudo}>{numero}</p>            
            </div> 
            <div className={styles.cardTitulo}>            
                <p>{nome}</p>
            </div>
            <div className={styles.cardConteudo}>                 
                <b>Valor</b>
                <p className={styles.informacoes}>  : R${valor}</p>
            </div>

            <div className={styles.cardBotoes}>
                <button className='botao-editar'>
                    <FiEdit 
                        size={28} 
                        title="Editar"
                        onClick={(e) => abrirModal(numero,nome,valor)}
                        />
                </button>

                <button className='botao-deletar'>
                    <IoIosRemoveCircleOutline 
                        size={32} 
                        title="Apagar"
                        onClick={(e) => deletarProduto(numero)}
                    />
                </button>
            </div>
           
        </div>
    
        </div>
    )
}
CardProduto.propTypes = {
    nome: PropTypes.string.isRequired,
    valor: PropTypes.number,
}

CardProduto.defaultProps = {
    nome: 'Faltou a nome',
    valor: 0,
}
export default CardProduto