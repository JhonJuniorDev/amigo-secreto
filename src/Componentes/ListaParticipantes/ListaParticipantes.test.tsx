import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaDeParticipantes } from "../../State/Hook/useListaDeParticipantes";

jest.mock('../../State/Hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});

describe('Uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );
        const itens = screen.queryAllByRole('listitem');

        expect(itens).toHaveLength(0);
    });
});
describe('Uma lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Gabriel']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );
        const itens = screen.queryAllByRole('listitem');

        expect(itens).toHaveLength(participantes.length);
    });
});