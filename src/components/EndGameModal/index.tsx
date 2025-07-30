import React from 'react';
import * as C from './styles';
import { formatTimeElapsed } from '../../helpers/formatTimeElapsed';

type Props = {
  visible: boolean;
  time: number;
  moves: number;
  record: { time: number; moves: number } | null;
  onRestart: () => void;
};

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