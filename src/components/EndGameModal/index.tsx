/**
 * Componente EndGameModal
 * 
 * Exibe um modal com o resultado do jogo quando o usuário conclui a partida.
 * Mostra o tempo decorrido, número de movimentos e recordes anteriores (se existirem).
 * Oferece um botão para reiniciar o jogo.
 * 
 * Props:
 * - visible: controla a visibilidade do modal.
 * - time: tempo decorrido da partida atual (em segundos).
 * - moves: número de movimentos realizados na partida atual.
 * - record: objeto com os melhores tempo e movimentos já registrados.
 * - onRestart: função chamada ao clicar no botão para reiniciar o jogo.
 */
import React from 'react';
import * as C from './styles';
import { formatTimeElapsed } from '../../helpers/formatTimeElapsed';

type Props = {
  /** Controla a visibilidade do modal */
  visible: boolean;
  /** Tempo decorrido da partida atual (em segundos) */
  time: number;
  /** Número de movimentos realizados na partida atual */
  moves: number;
  /** Objeto com os melhores tempo e movimentos já registrados */
  record: { time: number; moves: number } | null;
  /** Função chamada ao clicar no botão para reiniciar o jogo */
  onRestart: () => void;
};

/**
 * Componente que exibe um modal com o resultado do jogo quando o usuário conclui a partida.
 * Mostra o tempo decorrido, número de movimentos e recordes anteriores (se existirem).
 * Oferece um botão para reiniciar o jogo.
 */
export const EndGameModal = ({ visible, time, moves, record, onRestart }: Props) => {
  if (!visible) return null;

  return (
    <C.Overlay>
      <h2>Parabéns! Você concluiu o jogo.</h2>
      <p>Tempo: {formatTimeElapsed(time)}</p>
      <p>Movimentos: {moves}</p>
      {record && (
        <>
          <p><strong>Melhor tempo:</strong> {formatTimeElapsed(record.time)}</p>
          <p><strong>Menor número de movimentos:</strong> {record.moves}</p>
        </>
      )}
      <C.Button onClick={onRestart}>Jogar Novamente</C.Button>
    </C.Overlay>
  );
};