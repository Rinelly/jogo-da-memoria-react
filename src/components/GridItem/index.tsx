import { GridItemType } from '../../types/GridItemType';
import * as C from './style';
import foxSvg from '../../svgs/fox.svg';
import { items } from '../../data/Items';

/**
 * Container principal que envolve o item do grid.
 * Recebe uma propriedade para controlar a exibição do fundo baseado no estado do item.
 */
const Container = C.Container;

/**
 * Componente que representa o card com efeito de flip.
 * A propriedade $flipped controla se o card está virado ou não.
 */
const FlipCard = C.FlipCard;

/**
 * Lado frontal do card, geralmente exibindo a imagem padrão do verso da carta.
 */
const Front = C.Front;

/**
 * Lado traseiro do card, exibindo o ícone da carta quando virada.
 */
const Back = C.Back;

/**
 * Ícone exibido dentro do card, pode ser o verso ou a figura da carta.
 */
const Icon = C.Icon;

type Props = {
    item: GridItemType,
    onClick: () => void
}

/**
 * Componente visual que representa uma célula do grid no jogo da memória.
 * Ele exibe o ícone da carta com base no estado do item (virado ou não).
 * 
 * @param item - Objeto que define o estado da carta (virada, revelada, ou escondida).
 * @param onClick - Função executada ao clicar no item, usada para manipular a lógica do jogo.
 */
export const GridItem = ({ item, onClick }: Props) => {
  const isFlipped = item.permanentShown || item.shown;

  return (
    <Container onClick={onClick} showBackground={item.permanentShown || item.shown}>
      <FlipCard $flipped={isFlipped}>
        <Front>
          <Icon src={foxSvg} alt="Carta virada" opacity={0.1} />
        </Front>
        <Back>
          {item.item !== null && <Icon src={items[item.item].icon} alt="Carta" />}
        </Back>
      </FlipCard>
    </Container>
  );
};