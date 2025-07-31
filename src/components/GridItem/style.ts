import styled from 'styled-components';

type ContainerProps = {
    showBackground: boolean;
}

/**
 * Container
 * 
 * Componente externo que representa o corpo da carta.
 * Usa a prop `showBackground` para alternar a cor de fundo (virada ou não).
 */
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

/**
 * Icon
 * 
 * Imagem exibida no centro da carta.
 * Pode ter opacidade ajustada para efeitos de revelação.
 */
export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;

/**
 * FlipCard
 * 
 * Container interno que aplica a animação de virar a carta.
 * Gira 180 graus no eixo Y com base na prop `$flipped`.
 */
export const FlipCard = styled.div<{ $flipped: boolean }>`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s;
  transform: ${({ $flipped }) => ($flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

/**
 * Front
 * 
 * Lado frontal da carta (mostra fundo padrão).
 */
export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Back
 * 
 * Lado traseiro da carta (mostra o ícone real).
 */
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