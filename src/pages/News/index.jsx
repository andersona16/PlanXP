import React from "react";
import {
  Container,
  Card,
  Title,
  CardGame,
  TitleGame,
  TitleCard,
  GameText,
  Content,
  Footer,
} from "./styled";
import GamesNewOne from "../../assets/img/GamesNewOne.png";
import GamesNewTwo from "../../assets/img/GamesNewTwo.png";
import GamesNewThree from "../../assets/img/GamesNewThree.png";
import GamesNewFour from "../../assets/img/GamesNewFour.png";
import GamesNewFive from "../../assets/img/GamesNewFive.png";
import arrowRight from "../../assets/img/arrow.png";
import RobotIcon from "../../assets/img/RobotIcon.png";

const News = () => {
  return (
    <Container>
      <section>
        <Title>
          <p>/Plan news</p>
          <h1>/Cases Games</h1>
          <span>03.</span>
        </Title>
        <div className="button">
          clique aqui para ver todo o blog
          <img src={arrowRight} alt="Flecha icone" />
        </div>
      </section>

      <Card>
        <CardGame>
          <div>
            <img src={GamesNewOne} alt="" />
            <span>
              <img src={RobotIcon} alt="" />
            </span>
          </div>
          <Content>
            <TitleGame>SKA</TitleGame>
            <TitleCard>Plan cria o novo site da SKA</TitleCard>
            <GameText>
              Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam
              accumsan auctor elementum Nam fermentum mattis ligula vulputate
              bibendum...
            </GameText>

            <Footer>
              <a
                class="link"
                href="https://www.planmkt.com.br/pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
                <img src={arrowRight} alt="Flecha" />
              </a>
            </Footer>
          </Content>
        </CardGame>
        <CardGame>
          <div>
            <img src={GamesNewTwo} alt="" />
            <span>
              <img src={RobotIcon} alt="" />
            </span>
          </div>
          <Content>
            <TitleGame>tintas killing</TitleGame>
            <TitleCard>Plan cria o novo site para a Tintas Killing</TitleCard>
            <GameText>
              Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam
              accumsan auctor elementum Nam fermentum mattis ligula vulputate
              bibendum...
            </GameText>

            <Footer>
              <a
                class="link"
                href="https://www.tintaskilling.com.br/site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
                <img src={arrowRight} alt="Flecha" />
              </a>
            </Footer>
          </Content>
        </CardGame>
        <CardGame>
          <div>
            <img src={GamesNewThree} alt="" />
            <span>
              <img src={RobotIcon} alt="" />
            </span>
          </div>
          <Content>
            <TitleGame>cargo br</TitleGame>
            <TitleCard>Estamos desenvolvendo o novo site da CargoBR</TitleCard>
            <GameText>
              Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam
              accumsan auctor elementum Nam fermentum mattis ligula vulputate
              bibendum...
            </GameText>

            <Footer>
              <a
                class="link"
                href="https://cargobr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
                <img src={arrowRight} alt="Flecha" />
              </a>
            </Footer>
          </Content>
        </CardGame>
        <CardGame>
          <div>
            <img src={GamesNewFive} alt="" />
            <span>
              <img src={RobotIcon} alt="" />
            </span>
          </div>
          <Content>
            <TitleGame>Aromatic</TitleGame>
            <TitleCard>Novo site da Aromatic no ar</TitleCard>
            <GameText>
              Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam
              accumsan auctor elementum Nam fermentum mattis ligula vulputate
              bibendum...
            </GameText>

            <Footer>
              <a
                class="link"
                href="https://www.aromatic.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
                <img src={arrowRight} alt="Flecha" />
              </a>
            </Footer>
          </Content>
        </CardGame>
        <CardGame>
          <div>
            <img src={GamesNewFour} alt="" />
            <span>
              <img src={RobotIcon} alt="" />
            </span>
          </div>
          <Content>
            <TitleGame>XALINGO</TitleGame>
            <TitleCard>Clubinho Xalingo com novidades</TitleCard>
            <GameText>
              Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam
              accumsan auctor elementum Nam fermentum mattis ligula vulputate
              bibendum...
            </GameText>

            <Footer>
              <a
                class="link"
                href="https://brinquedos.xalingo.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
                <img src={arrowRight} alt="Flecha" />
              </a>
            </Footer>
          </Content>
        </CardGame>
      </Card>
    </Container>
  );
};

export default News;
