function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olám, ${algumNome}, tudo bem?`
    }
    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
export default Saudacao