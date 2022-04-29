import React from "react";
import { Cards, Card, CardImage, Title, Texts, One, Container } from "./styled";
import GameOne from "../../assets/img/GameOne.png";
import GameTwo from "../../assets/img/GameTwo.png";
import GameThree from "../../assets/img/GameThree.png";
import gamesicon from "../../assets/img/gamesicon.png";
import { Link } from "react-router-dom";

import arrowRight from "../../assets/img/arrow.png";

const Games = () => {
  return (
    <>
      <Container>
        <One>
          <Title>
            <p>/O que fazemos</p>
            <h1>/Games</h1>
            <span>02.</span>
          </Title>
          <Texts>
            <h2>Desenvolvimento de games digitais.</h2>
            <span>
              Empresa especialista em desenvolvimento games digitais e
              gamificação.
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquam ultricies sollicitudin. Cras vehicula congue odio, quis
              lobortis leo gravida non. In ornare erat tortor, mattis sodales
              leo efficitur at. In hac habitasse platea dictumst. Quisque ante
              tortor, egestas a lorem a, tempor lacinia nisi.
            </p>
          </Texts>
        </One>
        <section>
          <Cards>
            <Card>
              <CardImage>
                <img src={GameOne} alt="Imagem card" />
              </CardImage>
              <p>
                A <strong>PlanXP</strong> tem uma equipe qualificada para o
                <strong> desenvolvimento de jogos digitais</strong> para
                <strong> dispositivos móveis</strong> (smartphones, tablets e
                afins).
              </p>
            </Card>
            <Card>
              <CardImage>
                <img src={GameTwo} alt="Imagem card" />
              </CardImage>
              <p>
                Desenvolvemos games para anunciar seus produtos e serviços,
                através da <strong>gamificação</strong> (aplicações que utilizam
                dinâmicas de jogos para engajamento de usuários, resolução de
                problemas e melhoria no aprendizado).
              </p>
            </Card>
            <Card>
              <CardImage>
                <img src={GameThree} alt="Imagem card" />
              </CardImage>
              <p>
                Utilizando as últimas tecnologias para a
                <strong> criação de games</strong>, trabalhamos de acordo com as
                necessidades dos clientes, sempre buscando oferecer o resultado
                que ele busca.
              </p>
            </Card>
            <Card>
              <CardImage>
                <img src={gamesicon} alt="Imagem card" className="icon" />
              </CardImage>
              <p className="action">
                Experimente inovar com a<strong> PlanXP</strong> para
                <strong> desenvolver os seus jogos digitais!</strong>
              </p>
              <Link to="/contact">
                Entre em contato agora mesmo
                <img src={arrowRight} alt="Flecha icone" />
              </Link>
            </Card>
          </Cards>
        </section>
      </Container>
    </>
  );
};

export default Games;
