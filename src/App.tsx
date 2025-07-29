// React
import { useEffect, useState } from 'react';

// Estilos 
import * as C from './App.styles';

// Imagens e icones 
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';

// Componentes 
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem/index'

// Tipagem de dados
import { GridItemType } from './types/GridItemType';
import { items } from './data/Items';

// Helpers 
import { formatTimeElapsed } from './helpers/formatTimeElapsed';


const App = () => {
  // Estado que indica se o jogo está em andamento.
  const [playing, setPlaying] = useState<boolean>(false);

  // Tempo decorrido em segundos.
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  // Contador de movimentos feitos.
  const [moveCount, setMoveCount] = useState<number>(0);

  // Quantidade de cartas atualmente viradas (max 2 por vez)
  const [shownCount, setShownCount] = useState<number>(0);

  // Estado que representa os itens do grid do jogo.
  const [gridItems, setGridItems] = 
  useState<GridItemType[]>([]);

  // useEffect inicial para gerar o grid ao carregar o componente.
  useEffect(() => {
    resetAndCreateGrid();
  }, []);

   /**
   * useEffect para contar o tempo enquanto o jogo estiver ativo.
   * Incrementa o tempo decorrido a cada segundo.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing)
        // Atualiza o tempo usando o valor mais recente (previne bugs de sincronização).
        setTimeElapsed(prev => prev +1);
      }, 1000);
    // Limpa o intervalo quando o componente for desmontado ou playing mudar.
    return () => clearInterval(timer);
  }, [playing]); 
  /**
   * useEffect que verifica quando duas cartas estão viradas (shownCount === 2).
   * Compara as cartas e atualiza o estado conforme forem iguais ou diferentes.
   */
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if (opened.length === 2) {

        if (opened[0].item === opened[1].item) {
           let tmpGrid = [...gridItems];
            for (let i = 0; i < tmpGrid.length; i++) {
              if (tmpGrid[i].shown) {
                tmpGrid[i].permanentShown = true;
                tmpGrid[i].shown = false;
              }
            }
            setGridItems(tmpGrid);
            setShownCount(0);
            setMoveCount(prev => prev + 1);
            } else {
            // se forem diferentes, fecha eles após 1 segundo.
            setTimeout (() => {
            let tmpGrid = [...gridItems];
            for (let i = 0; i < tmpGrid.length; i++) {
                tmpGrid[i].shown = false;
              }
              setGridItems(tmpGrid);
              setShownCount(0);
              setMoveCount(prev => prev + 1);
            }, 1000);
        }
      }
    }
  }, [shownCount, gridItems]);

  /**
  * useEffect que verifica se o jogo foi concluído.
  * Para o jogo e exibe uma mensagem de parabéns.
  */
  useEffect(() => {
    const isGameComplete = gridItems.length > 0 && gridItems.every(item => item.permanentShown);

    if (playing && isGameComplete) {
      setPlaying(false);
      setTimeout(() => {
        alert(`Parabéns! Você ganhou em ${moveCount} movimentos em ${formatTimeElapsed(timeElapsed)}!`);
      }, 1000);
    }
  }, [gridItems, moveCount, playing, timeElapsed]);

  /**
   * Função para resetar o jogo e criar um novo grid.
   */
  const resetAndCreateGrid = () => {

    //Passo 1 - Resetar o jogo.
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
   
    // Passo 2 - Criar o grid e começar o jogo.
    // Passo 2.1 - Criar um grid vazio
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) tmpGrid.push({
        item: null, 
        shown: false, 
        permanentShown: false
      });

    // Passo 2.2 - Preencher o grid com os itens.
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
    // Passo 2.3 - Jogar no state.
    setGridItems(tmpGrid);

    //Passo 3 - começar o jogo.
    setPlaying(true);

  };
  /**
   * Função que trata o clique em um item do grid.
   * Verifica se o jogo está ativo, se o item clicado é válido e se ainda há espaço para virar mais uma carta (máximo de 2).
   * Se as condições forem atendidas, marca o item como "shown" (virado) e atualiza o estado do grid.
   */
  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (tmpGrid[index].shown === false && tmpGrid[index].permanentShown === false) {
        tmpGrid[index].shown = true;
        setGridItems(tmpGrid);
        setShownCount(shownCount + 1);
      }
    }
  };
  /**
  * Renderização principal do componente App.
  * Exibe o cabeçalho com logo, tempo, movimentos e botão de reinício.
  * Renderiza a área do grid com os itens do jogo, utilizando o componente GridItem.
  */
  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) =>
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
};

export default App;
