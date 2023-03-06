import '../styles/header.scss';
import { ButtonIcon } from './ButtonIcon';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Header() {
    return(
        <nav className="navbar">
            <div className='logo'> 
                <p>Thaty<span>Stober</span></p>
            </div>

            <ul>
                <li><a href="">Sobre mim</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Habilidades</a></li>
            </ul>

            <div className='buttons'>
                <ButtonIcon classButton="download-curriculum" text='Baixar Curriculum' backgroundColor='#999999' icon={<DescriptionOutlinedIcon />} link="https://www.google.com/"/>

                <ButtonIcon classButton="button-whats" text='Vamos conversar' backgroundColor='#09A405' icon={<WhatsAppIcon />} link="https://www.google.com/"/>
            </div>
           
        </nav>
    )
}