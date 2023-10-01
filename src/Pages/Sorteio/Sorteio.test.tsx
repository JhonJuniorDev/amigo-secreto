import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../State/Hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";
import { useResultadoDoSorteio } from "../../State/Hook/useResultadoDoSorteio";

jest.mock('../../State/Hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});
jest.mock('../../State/Hook/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    };
});

describe('Na pagina de sorteio', () => {
    const participantes = [
        'Ana',
        'Gabriel',
        'Jhon'
    ]

    const resultado = new Map([
        ['Ana', 'Gabriel'],
        ['Gabriel', 'Jhon'],
        ['Jhon', 'Ana']
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
    });
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );
        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length + 1) // porque já vem uma option por padrão
    });
    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );
        const select = screen.getByPlaceholderText('Selecione o seu nome');
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert');

        expect(amigoSecreto).toBeInTheDocument()

    });
});