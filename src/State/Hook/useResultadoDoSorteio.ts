import { useRecoilValue } from "recoil"
import { resultadoDoAmigoSecreto } from "../Atom"

export const useResultadoDoSorteio = () => {
    return useRecoilValue(resultadoDoAmigoSecreto)
}