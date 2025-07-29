import * as C from './styles';

type Props = {
    label: string;
    icon?: any; 
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Componente de botão reutilizável com opção de ícone.
 * 
 * @param label - Texto exibido no botão.
 * @param icon - Imagem opcional exibida ao lado do texto.
 * @param onClick - Função callback executada ao clicar no botão.
 */
export const Button = ({label, icon, onClick}: Props) => {
    return (
        <C.Container onClick={onClick}>
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon}/>
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    );
}
