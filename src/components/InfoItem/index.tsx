import * as C from './styles';

type Props = { 
    label: string;
    value: string | number;
}

/**
 * Componente que exibe uma informação em formato de rótulo e valor.
 * Utilizado para mostrar dados como tempo decorrido ou número de movimentos.
 *
 * @param label - Texto descritivo (ex: "Tempo", "Movimentos").
 * @param value - Valor associado ao rótulo, pode ser string ou número.
 */
export const InfoItem = ({label, value}: Props) => {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}