import { useEffect, useState } from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/all";

import "./styles.css";

export default function Home() {
  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <nav>
        <img
          className="logo"
          src="/assets/logo.png"
          alt="logo bendita computação"
        />
        <ul className="pages">
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
        <button className="chat-button">Chat</button>
      </nav>
      <section
        id="sec1"
        className="section"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className="content">
          <h1>Lorem ipsum</h1>
          <h1>dolor</h1>
          <h1>it amet, consectetur</h1>
          <p className="section-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu urna id purus viverra efficitur vehicula non justo. Curabitur
            varius ex eu dictum dignissim. Nulla purus elit, tincidunt eget
            fringilla sed, scelerisque vel odio. Nullam accumsan ac diam vel
            bibendum. Maecenas vel pellentesque diam. Nam a urna lectus. Ut
            ante.
          </p>
        </div>
        <img
          className="section-img"
          src="/assets/imagem1.png"
          alt="homem tocando no celular"
        />
      </section>

      <section id="sec2" className="section">
        <div className="content">
          <h2>Lorem ipsum</h2>
          <h2>dolor</h2>
          <h2>it amet, consectetur</h2>
          <p className="section-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu urna id purus viverra efficitur vehicula non justo. Curabitur
            varius ex eu dictum dignissim. Nulla purus elit, tincidunt eget
            fringilla sed, scelerisque vel odio. Nullam accumsan ac diam vel
            bibendum. Maecenas vel pellentesque diam. Nam a urna lectus. Ut
            ante.
          </p>
        </div>
        <img
          className="section-img"
          src="/assets/imagem1.png"
          alt="homem tocando no celular"
        />
      </section>

      <footer id="footer">
        <div>
          <a href="https://bit.ly/3zgxbYj">
            <img
              className="footer-img"
              src="/assets/google-report.png"
              alt="verificador de sites google"
            />
          </a>
        </div>
        <div className="social">
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <AiFillLinkedin />
          </a>
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillGithub />
          </a>
        </div>
      </footer>
    </main>
  );
}
