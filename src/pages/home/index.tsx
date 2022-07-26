import "./styles.css";

import { GiHamburgerMenu } from "react-icons/gi";

export function Home() {
  return (
    <div className="home">
      <nav>
        <div></div>
        <GiHamburgerMenu className="drawer" />
      </nav>
      <main>
        <span className="title">Bendita
          <br />
          Computação
        </span>
        <span className="descricao">
          Buscando sempre a melhor solução <br />
          para o seu negócio.
        </span>
        <span className="contact">
          (77) 988289468 <br />

          <a href="mailto:bendita@computacao.com.br">bendita@computacao.com.br</a>
        </span>
      </main>
    </div>
  )
}
