import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../Atom"
import { realizarSorteio } from "../Helpers/realizarSorteio"
export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)
    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}