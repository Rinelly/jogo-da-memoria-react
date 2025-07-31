import styled from 'styled-components';

/**
 * Container
 * 
 * Wrapper principal da aplicação que centraliza o conteúdo horizontalmente
 * e define um layout flexível com espaçamento vertical.
 * Se adapta a telas menores com empilhamento vertical.
 */
export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
      flex-direction: column;
    }
`;
