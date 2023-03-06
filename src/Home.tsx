import { Header } from './components/Header'
import { ButtonIcon } from './components/ButtonIcon'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './styles/home.scss';
import foto from './assets/foto.png';

import { Container } from '@mui/material';

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <Container maxWidth="md">
        <section id='introduction'>
          <div className='introduction-name'>
            <p>
              Oi, meu nome é 
              <br/> 
              <span>Thatiely Stober</span> 
              <br/> 
              Desenvolvedora Front-end.
            </p>
            
            <ButtonIcon classButton="button-whats" text='Vamos conversar' backgroundColor='#09A405' icon={<WhatsAppIcon />} link="https://www.google.com/"/>
          </div>
          <div className='introduction-foto'>
              <div className='box-blue'></div>
              <img src={foto} alt="Foto Thatiely Stober" />
          </div>
        </section>
      </Container>
    </div>
  )
}
