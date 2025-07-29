import styled from 'styled-components';

type ContainerProps = {
    showBackground: boolean;
}

// Estilo do container do item do grid.
// Muda a cor de fundo com base na prop `showBackground` (carta virada ou não).
export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}

// Estilo da imagem do ícone exibido na carta.
// Controla o tamanho e a opacidade da imagem (útil para esconder parcialmente).
export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;