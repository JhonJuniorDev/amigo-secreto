import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "../Atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaParticipantesState)
}