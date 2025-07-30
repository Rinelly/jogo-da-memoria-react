import styled from 'styled-components';

type ContainerProps = {
    showBackground: boolean;
}

// Estilo do container do item do grid.
// Muda a cor de fundo com base na prop `showBackground` (carta virada ou não).
export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#FF8C46' : '#E2E3E3'};
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

export const FlipCard = styled.div<{ $flipped: boolean }>`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s;
  transform: ${({ $flipped }) => ($flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;