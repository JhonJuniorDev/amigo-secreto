import { useRecoilValue } from "recoil"
import { erroState } from "../Atom"

export const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem;
}