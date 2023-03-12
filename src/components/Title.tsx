import '../styles/components/title.scss';

interface TitleProps{
    title: string;
}

export function Title({title}: TitleProps) {
    return(
        <h2 className="title">{title}</h2>
    )
}