import styled from 'styled-components';

/**
 * Overlay
 * 
 * Componente visual que cobre toda a tela com fundo escuro translúcido,
 * usado para exibir o modal de fim de jogo no centro da tela.
 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

/**
 * Button
 * 
 * Botão estilizado usado no modal de fim de jogo para reiniciar a partida.
 */
export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #FF8C46;
  color: #fff;
`;