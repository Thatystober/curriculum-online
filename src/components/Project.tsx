import { ButtonDefault } from "./ButtonDefault";

interface ProjectProps{
    title: string;
    image: string;
    link: string;
}

export function Project({title, link, image}: ProjectProps) {
    return(
        <div className="project">
            <a href={link} className="title-project" target="__blank">{title}</a>
            <div className="image-project">
                <img src={image} alt="Imagem do Projeto" />
            </div>

            <ButtonDefault classButton="access" backgroundColor="#0C4EF7" bottom="0.5rem" right="0.5rem" 
            width="20%" borderRadius="1.25rem" text="Acesse"  href="https://www.google.com/"/>
        </div>

    )}
