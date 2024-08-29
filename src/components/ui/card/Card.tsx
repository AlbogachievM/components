import s from './styles.module.scss'

interface Props {
    maxWidth?: string
    height?: string
    className?: string
    children: React.ReactNode;
}

export const Card = (props: Props)=> {
    const {children, height = '550px', maxWidth = "420px"} = props
    return (
        <div className={`${s.card}`} style={{maxWidth, height}}>
            {children}
        </div>
    );
};

