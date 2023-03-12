import { Header } from './components/Header'
import { ButtonIcon } from './components/ButtonIcon'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './styles/home.scss';
import foto from './assets/foto.png';
import project from './assets/teste.png';

import { Container } from '@mui/material';
import { Project } from './components/Project';
import { Title } from './components/Title';

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <Container maxWidth="md">
        <section id='introduction'>
          <div className='introduction-name'>
            <h1>
              Oi, meu nome é 
              <br/> 
              <span>Thatiely Stober</span> 
              <br/> 
              Desenvolvedora Front-end.
            </h1>
            
            <ButtonIcon classButton="button-whats" text='Vamos conversar' backgroundColor='#09A405' icon={<WhatsAppIcon />} link="https://www.google.com/"/>
          </div>
          <div className='introduction-foto'>
              <div className='box-blue'></div>
              <img src={foto} alt="Foto Thatiely Stober" />
          </div>
        </section>
        <section id="about">
          <Title title="Sobre"/>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>

        <section id='projects'>
          <Title title="Projetos"/>
          
            <div className='items-projects'>
              <Project title="Projeto 1" image={project} link="https://www.google.com/" />
              <Project title="Projeto 1" image={project} link="https://www.google.com/" />
            </div>
        </section>

        <section id="skills">
            <Title title="Habilidades"/>
        </section>
      </Container>
    </div>
  )
}
