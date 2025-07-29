import { GridItemType } from '../../types/GridItemType';
import * as C from './style';
import foxSvg from '../../svgs/fox.svg';
import { items } from '../../data/Items';

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
export const GridItem = ({item, onClick}: Props)=> {
    return (
        <C.Container 
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
            <C.Icon src={foxSvg} alt="" opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
            <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    );
}