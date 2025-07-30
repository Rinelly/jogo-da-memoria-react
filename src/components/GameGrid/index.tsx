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