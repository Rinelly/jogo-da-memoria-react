/**
 * Define a estrutura de um item no grid do jogo da memória.
 * - item: representa o índice do item no array de ícones (null se vazio).
 * - shown: indica se a carta está temporariamente virada.
 * - permanentShown: indica se a carta foi acertada e deve permanecer virada.
 */
export type GridItemType = {
    item: number | null;
    shown: boolean;
    permanentShown: boolean;
};
