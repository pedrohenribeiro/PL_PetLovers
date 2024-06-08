import Button from "./evento/Button";
function Evento({numero}){
    function meuEvento(){
        console.log(`Ativando o primeiro Evento`)
    }
    function meuSegundoEvento(){
        console.log(`Ativando o segundo Evento`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={meuSegundoEvento} text="Segundo Evento"/>
            {/* <button onClick={meuEvento}>Ativar!</button> */}

        </div>
    )
}

export default Evento;