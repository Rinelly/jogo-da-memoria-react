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

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

     transition: background-color 0.3s ease, color 0.3s ease;
     
    @media (max-width: 750px) {
      flex-direction: column;
    }
`;

export const ThemeToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  background: transparent;
  border: none;
  padding: 6px;

  cursor: pointer;
  font-size: 22px;
  line-height: 1;

  color: ${({ theme }) => theme.text};

  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
