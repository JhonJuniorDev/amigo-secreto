import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../State/Hook/useListaDeParticipantes"
import './Rodape.css'
import { useSorteador } from "../../State/Hook/useSorteador"
import Sacola from '../../assets/imagens/sacolas.png'

const Rodape = () => {
    const participantes = useListaDeParticipantes()
    const navegarPara = useNavigate()
    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/Sorteio')
    }

    return (<footer className="rodape-configuracoes">
        <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        <img src={Sacola} alt="Sacolas de compras" />
    </footer>)
}

export default Rodape