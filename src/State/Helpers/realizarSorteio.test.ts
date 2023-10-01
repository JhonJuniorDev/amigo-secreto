import { realizarSorteio } from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Ana',
            'Joseff',
            'Jhon',
            'Babara',
            'Daniel',
            'Zacarias'
        ]
        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        });
    });
});