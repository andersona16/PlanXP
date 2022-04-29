import React from "react";
import {
  Container,
  Main,
  Content,
  Header,
  Texts,
  Footer,
  Logo,
  Title,
  Section,
} from "./styled";
import arrowRight from "../../assets/img/whiteArrow.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/youtube.png";
import localization from "../../assets/img/localization.png";
import marketing from "../../assets/img/logo-marketing.png";
import logo from "../../assets/img/plan_logo.png";
import fullup from "../../assets/img/fullup.png";
import Formulario from "../../components/modules/Formulario";

const Contact = () => {
  return (
    <>
      <Container>
        <Section>
          <Title>
            <h1>/Contato</h1>
            <span>05.</span>
          </Title>
          <Texts>
            <p>
              Gostou de saber mais sobre as inovações tecnológicas e também quer
              oferecer novas experiências aos seus clientes? Então entre em
              contato e marque um encontro real conosco para conversamos sobre
              as infinitas possibilidades do mundo virtual.
            </p>
          </Texts>
          <Formulario />
        </Section>
        <Section>
          <Main>
            <Content>
              <Header>Siga-nos</Header>
              <Texts>
                Fique sempre por dentro de todas as novidades da Plan XP e de
                todas empresas do Grupo Plan Marketing.
              </Texts>
              <Footer>
                <a
                  href="https://www.facebook.com/planmkt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/planmkt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram " />
                </a>
                <a
                  href="https://www.youtube.com/user/planmkt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="Youtube " />
                </a>
              </Footer>
            </Content>
            <Content>
              <Header>
                <img src={localization} alt="Localização" />
                /RS
              </Header>
              <Texts>
                Rua Onze de Junho, 243 Novo Hamburgo / RS Brasil
                <br />
                +55 51 98229.0400
              </Texts>
              <Footer>
                <a
                  class="link"
                  href="https://goo.gl/maps/L5ZD2rskXLYfJFDQA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ver no google maps
                  <img src={arrowRight} alt="Flecha" />
                </a>
              </Footer>
            </Content>
            <Content>
              <Header>
                <img src={localization} alt="Localização" />
                /SP
              </Header>
              <Texts>
                Rua Ibijaú, 355/Sala 1309 São Paulo / SP Brasil
                <br />
                +55 11 98871.8556
              </Texts>
              <Footer>
                <a
                  class="link"
                  href="https://goo.gl/maps/VAT6UZve6MJqorHLA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ver no google maps
                  <img src={arrowRight} alt="Flecha" />
                </a>
              </Footer>
            </Content>
            <Content>
              <Header>
                <Logo src={marketing} alt="Logo marketing" />
              </Header>
              <Texts>
                A Plan faz parte do Grupo Plan Marketing, um grupo de
                comunicação completo.
              </Texts>
              <Footer>
                <a
                  class="link"
                  href="https://www.planmkt.com.br/pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  conheça
                  <img src={arrowRight} alt="Flecha" />
                </a>
              </Footer>
            </Content>
            <Content>
              <Header>
                <Logo src={logo} alt="Logo Plan" />
              </Header>
              <Texts>
                A Plan XP é especializada em realidade virtual, realidade
                aumentada e jogos.
              </Texts>
              <Footer>
                <a
                  class="link"
                  href="https://www.vrschool.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  conheça
                  <img src={arrowRight} alt="Flecha" />
                </a>
              </Footer>
            </Content>
            <Content>
              <Header>
                <Logo src={fullup} alt="Logo fullup" />
              </Header>
              <Texts>
                A FullUp é uma agência especializada em branding, design e
                campanhas.
              </Texts>
              <Footer>
                <a
                  class="link"
                  href="https://www.planmkt.com.br/pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  conheça
                  <img src={arrowRight} alt="Flecha" />
                </a>
              </Footer>
            </Content>
          </Main>
        </Section>
      </Container>
    </>
  );
};

export default Contact;
