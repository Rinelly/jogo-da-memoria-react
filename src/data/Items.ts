import android from '../svgs/android.svg';
import caminhao from '../svgs/caminhao.svg';
import disney from '../svgs/disney.svg';
import estrela from '../svgs/estrela.svg';
import gasolina from '../svgs/gasolina.svg'
import moto from '../svgs/moto.svg'

/**
 * Lista de itens utilizados no jogo da memória.
 * Cada item representa um par de cartas com:
 * - name: identificador textual do item.
 * - icon: caminho para o SVG que será exibido como imagem da carta.
 * Esta lista é usada para montar o grid aleatório de cartas.
 */
export const items = [
  {name: 'android', icon: android},
  {name: 'caminhao', icon: caminhao},
  {name: 'disney', icon: disney},
  {name: 'estrela', icon: estrela},
  {name: 'gasolina', icon: gasolina},
  {name: 'moto', icon: moto}
]

