import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItemType } from './types/GridItemType';
import {GridItem} from './components/GridItem/index'
import {items} from './data/Items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';
// import { clearInterval } from 'timers';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreatGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed +1);
      }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);
  
  const resetAndCreatGrid = () => {

    //Passo 1 - Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
   
    // Passo 2 - Criar o grid e começar o jogo

    // Passo 2.1 - Criar um grid vazio
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) tmpGrid.push({
        item: null, shown: false, permanentShown: false
      });

    // Passo 2.2 - Preencher o grid com os itens
      for (let w = 0; w < 2; w++) {
        for (let i = 0; i < items.length; i++) {
          // Pegar uma posição aleatória
          let pos = -1;
          while(pos < 0 || tmpGrid[pos].item !== null) {
            pos = Math.floor(Math.random() * (items.length * 2));
          }
          tmpGrid[pos].item = i;
        }
      }
    // Passo 2.3 - Jogar no state
    setGridItems(tmpGrid);

    //Passo 3 - começar o jogo
    setPlaying(true);

  };

  const handleItemClick = (index: number) => {
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreatGrid} />
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index)=>
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          )}
        </C.Grid>
      </C.GridArea>

    </C.Container>
  );
}

export default App;
