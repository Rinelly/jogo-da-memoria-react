import styled from "styled-components";

// Container principal do botão.
// Define dimensões, cor, borda e efeito de hover.
export const Container = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #1550FF;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    opacity: 1;
    transition: all ease 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

// Área que envolve o ícone dentro do botão.
// Aplica padding e uma borda de separação visual.
export const IconArea = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0 15px;
`;

// Estilização da imagem do ícone do botão.
// Define tamanho fixo de altura.
export const Icon = styled.img`
    height: 20px;
`;

// Área do texto (label) do botão.
// Centraliza o texto vertical e horizontalmente.
export const Label = styled.div`
    height: inherit;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 20px;
`;
