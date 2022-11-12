import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/all';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Button, Contact, Container, Content, Footer, Navbar, Separator } from './styles';

export function Home() {
  return (
    <Container>
      <Navbar>
        <img className="logo" src="/assets/logo.png" alt="logo bendita computação" />
        <ul className="pages">
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#aboutus">Sobre nós</a>
          </li>
          <li>
            <a href="#products">Produtos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <Button>Chat</Button>
      </Navbar>

      <Separator />

      <Content>
        <div className="content">
          <h1>Lorem ipsum</h1>
          <h1>dolor</h1>
          <h1>it amet, consectetur</h1>
          <p className="section-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu urna id purus viverra efficitur
            vehicula non justo. Curabitur varius ex eu dictum dignissim. Nulla purus elit, tincidunt eget fringilla sed,
            scelerisque vel odio. Nullam accumsan ac diam vel bibendum. Maecenas vel pellentesque diam. Nam a urna
            lectus. Ut ante.
          </p>
        </div>
        <div className="logo">
          <img src="/assets/imagem1.png" alt="homem tocando no celular" />
        </div>
      </Content>
      <Footer>
        <button type="button" onClick={() => window.open('https://bit.ly/3zgxbYj')}>
          <img className="footer-img" src="/assets/google-report.png" alt="verificador de sites google" />
        </button>
        <div className="Social">
          <AiFillInstagram />

          <AiFillLinkedin />

          <AiFillFacebook />

          <AiFillGithub />
        </div>
      </Footer>
      {/* <Contact /> */}
    </Container>
  );
}
