import PropTypes from 'prop-types'
import styles from './CardCliente.module.css'
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import React, { useState, useEffect } from 'react';

function CardCliente({id,nome,nomeSocial,email,dadosTelefones,cpf,dataEmissaoCpf,dadosRgs,estado,cidade,bairro,rua,numero,cep,complemento,
    DeletarCliente,AbrirModal
    }){

    const [ativo, setAtivo] = useState(false);

    function ativar() {
        setAtivo(!ativo)
    }

    return(
        <div className={`${styles.cardList} ${ativo ? styles.active : ''}`}> 
            <div className={styles.cardId}>
                <p className={styles.cardIdConteudo}>{id}</p>            
            </div> 
            <div className={styles.cardTitulo}>            
                <h3>{nome}</h3>

            </div >

            <div className={styles.conteudo}>
                <div className={styles.cardConteudo}>                 
                    <b>Email:</b>
                    <p className={styles.informacoes}> {email}</p>
                </div>
                {dadosTelefones.map((dados, index) => (//criar um componente para subistituir essa função
                    <div className={styles.cardConteudo} key={index}>  
                            <b>Telefone: {index+1}</b>
                            <p className={styles.informacoes}>{dados.telefone}</p>
                    </div>
                ))}
                <div className={styles.cardConteudo}>                 
                    <b>Nome Social: </b>
                    <p className={styles.informacoes}> {nomeSocial}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>CPf:</b>
                    <p className={styles.informacoes}> {cpf}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Data de Emissao CPf:</b>
                    <p className={styles.informacoes}> {dataEmissaoCpf}</p>
                </div>
                {/* criar um componente para subistituir essa função */}

                {dadosRgs.map((dados, index) => (
                    <div key={index}>
                        <div className={styles.cardConteudo}>  
                            <b>Rg {index+1}: </b>
                            <p className={styles.informacoes}>{dados.rgCliente}</p>
                        </div> 
                        <div className={styles.cardConteudo}>  
                            <b>UF-RG {index+1}: </b>
                            <p className={styles.informacoes}>{dados.ufRgCliente}</p>
                        </div> 
          
                        {index === dadosRgs.length - 1 ? (
                            <div className={styles.cardConteudo}>  
                                <b>Data de Emissao RG {index+1}: </b>
                                <p className={styles.informacoes}>{dados.dataEmissaoRgCliente}</p>
                            </div> 
                        ) : (
                            <div className={styles.cardConteudo}>  
                                <b className={styles.informacoesUltima}>Data de Emissao RG {index+1}: </b>
                                <p className={styles.informacoes}>{dados.dataEmissaoRgCliente}</p>
                            </div> 
                        )}
                    </div> 
                ))}
                
            

                <div className={styles.cardConteudo}>                 
                    <b>Estado: </b>
                    <p className={styles.informacoes}> {estado}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Cidade: </b>
                    <p className={styles.informacoes}> {cidade}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Bairro: </b>
                    <p className={styles.informacoes}> {bairro}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Rua: </b>
                    <p className={styles.informacoes}> {rua}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Numero: </b>
                    <p className={styles.informacoes}> {numero}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>CEP: </b>
                    <p className={styles.informacoes}> {cep}</p>
                </div>
                <div className={styles.cardConteudo}>                 
                    <b>Complemento: </b>
                    <p className={styles.informacoes}> {complemento}</p>
                </div>
            </div>

            <div className={styles.areaBotoes}>

                <div className={styles.cardBotoes}>

                    <button className='botao-editar'>
                        <FiEdit 
                            size={28} 
                            title="Editar"
                            onClick={(e) => 
                                AbrirModal(id,nome,nomeSocial,email,dadosTelefones,cpf,dataEmissaoCpf,dadosRgs,estado,cidade,bairro,rua,numero,cep,complemento)}
                            />
                    </button>
                    <button className='botao-deletar'>
                        <IoIosRemoveCircleOutline 
                            size={32} 
                            title="Apagar"
                            onClick={(e) => DeletarCliente(id)}
                        />
                    </button>

                </div>
                
                <div className={styles.cardBotoes}>
                    <button id={styles.botaoVerMais} onClick={ativar}>Ver mais</button>
                </div>

            </div>

        </div>
    )
}

/* 
CardCliente.propTypes = {
    nome: PropTypes.string.isRequired,
    nomeSocial: PropTypes.string.isRequired,
    cpf: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.number.isRequired,
    dataEmissaoCpf: PropTypes.number.isRequired,
    estado: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    rua: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    cep: PropTypes.number.isRequired,
    complemento: PropTypes.string.isRequired,
}

CardCliente.defaultProps = {
    nome: 'Sem Nome',
    nomeSocial: 'Sem Nome Social',
    cpf: 0,
    email: 'Sem email',
    telefone: 'Sem telefone',
    dataEmissaoCpf: 'Sem data emissao CPF',
    dataEmissaoRg: 0,
    estado: 'Sem estado',
    cidade: 'Sem cidade',
    bairro: 'Sem bairro',
    rua: 'Sem rua',
    numero: 0,
    cep: 0,
    complemento: 'Sem complemento',
} */
export default CardCliente
