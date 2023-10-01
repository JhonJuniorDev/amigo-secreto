import Card from "../Componentes/Card/index"
import Formulario from "../Componentes/Formulario/Formulario"
import ListaParticipantes from "../Componentes/ListaParticipantes/ListaParticipantes"
import Rodape from "../Componentes/Rodape/Rodape"

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao