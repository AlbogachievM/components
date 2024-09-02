import iconsSprite from '../../../assets/images/icons-sprite.svg'

interface Props {
    iconId: IconId;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
}


export type IconId = 'arrow-pagination-left'
    | 'arrow-pagination-right'
    | 'arrow-select-up'
    | 'arrow-select-down'
    | 'more'
    | 'logOut'
    | 'profile'
    | 'play'
    | 'trash'
    | 'edit'


export const Icon: React.FC<Props> = (props: Props) => {
    return (
        <svg width={props.width || "24"} height={props.height || "24"} viewBox={props.viewBox || "0 0 24 24"}
             fill={props.fill || "#ffffff"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};