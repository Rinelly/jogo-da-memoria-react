import styled from 'styled-components';

/**
 * GridArea
 * 
 * Área externa que envolve o grid de cartas.
 * Responsável por posicionar o grid no layout principal da aplicação.
 * Se adapta para centralizar o conteúdo em telas menores.
 */
export const GridArea = styled.div`
    flex: 1;
    display: flex;
    
    @media (max-width: 750px) {
      justify-content: center;
      margin: 0 20px;
    }
`;

/**
 * Grid
 * 
 * Container com layout de grid para renderizar as cartas.
 * Usa 4 colunas em telas grandes e 2 colunas em telas menores.
 */
export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
`;