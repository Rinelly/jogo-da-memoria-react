import styled from 'styled-components';


/**
 * Wrapper
 * 
 * Container principal do cabeçalho que alinha o logo, informações e botão.
 * Utiliza flexbox para distribuição dos elementos e responsividade em telas menores.
 */
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px;
  flex-wrap: wrap;

   @media (max-width: 750px) {
      justify-content: center;
      margin-bottom: 50px;  
      align-items: center;
    }

`;

/**
 * Info
 * 
 * Container que agrupa os elementos de informações (tempo e movimentos).
 */
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
      margin-bottom: 50px;  
      align-items: center;
    }
`;

/**
 * LogoLink
 * 
 * Elemento de link que envolve a imagem do logo.
 */
export const LogoLink = styled.a`
    display: block;
    
`;

/**
 * InfoArea
 * 
 * Área que agrupa os componentes de informação (tempo e movimentos) e os distribui no layout.
 */
export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
`;
