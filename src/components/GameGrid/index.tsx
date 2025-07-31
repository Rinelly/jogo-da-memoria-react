/**
 * Componente GameGrid
 * 
 * Responsável por renderizar a grade de cartas do jogo da memória.
 * Recebe os itens do grid e a função de clique como props.
 * Cada item é renderizado como um componente GridItem.
 * 
 * Props:
 * - gridItems: array de objetos representando o estado de cada carta no grid.
 * - onItemClick: função executada ao clicar em uma carta, passando o índice.
 */
import { GridItemType } from '../../types/GridItemType';
import { GridItem } from '../GridItem';
import * as C from './styles';

type Props = {
  gridItems: GridItemType[];
  onItemClick: (index: number) => void;
};

export const GameGrid = ({ gridItems, onItemClick }: Props) => {
  return (
    <C.GridArea>
      <C.Grid>
        {gridItems.map((item, index) => (
          <GridItem
            key={index}
            item={item}
            onClick={() => onItemClick(index)}
          />
        ))}
      </C.Grid>
    </C.GridArea>
  );
};