import * as C from './styles';
import logoImage from '../../assets/memory-fox.svg';
import RestartIcon from '../../svgs/restart.svg';
import { InfoItem } from '../InfoItem';
import { Button } from '../Button';
import { formatTimeElapsed } from '../../helpers/formatTimeElapsed';

type Props = {
  time: number;
  moves: number;
  onReset: () => void;
};

export const Header = ({ time, moves, onReset }: Props) => {
  return (
    <C.Wrapper>
      <C.LogoLink href="">
        <img src={logoImage} width="200" alt="Logo do jogo da memória" />
      </C.LogoLink>

      <C.InfoArea>
        <InfoItem label="Tempo" value={formatTimeElapsed(time)} />
        <InfoItem label="Movimentos" value={moves} />
      </C.InfoArea>

      <Button label="Reiniciar" icon={RestartIcon} onClick={onReset} />
    </C.Wrapper>
  );
};