import styles from './SemDados.module.css'

function SemDados ({titulo}) {
    return(
        <div>
            <div className={styles.cardAlerta}>
                    Ainda nao tem dados de nenhum {titulo}
            </div>
            
        </div>
    )
}

export default SemDados