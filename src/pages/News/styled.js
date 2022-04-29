import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  position: relative;
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 40px;
    font-weight: normal;
    color: #939598;
  }
  span {
    position: absolute;
    top: -35px;
    left: 0;
    z-index: -999;
    font-size: 100px;
    font-weight: bold;
    color: #292929;
  }
`;
export const Container = styled.section`
  margin: 210px 0 0 80px;
  section {
    display: flex;
    gap: 20px;
    align-items: flex-end;

    .button {
      color: #939598;
      display: flex;
      align-items: flex-end;
      img {
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 900px) {
    margin: 20px 10px;
    section {
      width: 90%;
      max-width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      margin-top: 20px;
      flex-direction: column;
      gap: 20px;
      .title {
        span {
          top: -30px;
        }
      }
      .button {
        font-size: 18px;
      }
    }
    .cards {
      margin-top: 50px;
    }
  }
`;

export const CardGame = styled.div`
  margin-top: 50px;
  width: 280px;
  background-color: #292929;
  cursor: pointer;
  div {
    position: relative;
    > img {
      max-width: 100%;
      height: auto;
    }

    > span {
      position: absolute;

      display: flex;

      justify-content: end;
      width: 70px;
      height: 70px;
      background-color: #1e1e1e;
      -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
      clip-path: polygon(100% 0, 0 0, 100% 100%);
      z-index: 999;
      right: 0;
      top: 0;
      img {
        width: initial;
        height: 20px;
      }
    }
  }
`;

export const TitleGame = styled.div`
  width: max-content;
  font-weight: bold;
  padding: 1px 6px;
  color: #000;
  background-color: #939598;
  text-transform: uppercase;
`;
export const TitleCard = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: #939598;
`;

export const GameText = styled.p`
  font-size: 18px;
  line-height: 25px;
`;

export const Content = styled.div`
  padding: 20px;

  display: flex;

  flex-direction: column;
  gap: 10px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  p {
    font-size: 15px;
    text-transform: uppercase;
    img {
      margin-left: 5px;
    }
  }
  .link {
    text-decoration: none;
    text-transform: uppercase;
    color: #939598;
    font-size: 14px;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 1px #fff;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
    &:after {
      transform-origin: 0% 50%;
    }
    img {
      margin-left: 10px;
    }
  }
`;
