import Participante from '../../assets/imagens/participante.png'
import './Cabecalho.css'

const Cabecalho = () => {
    return (
    <header className="cabecalho">
        <div className="imagem__logo" role='img' aria-label='Logo do Sorteador'>
        </div>
        <img className="participante" src={Participante} alt="Participante com um presente na mão" />
    </header>
    )
}

export default Cabecalho;