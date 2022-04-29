import styled from "styled-components";

export const Main = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 80px;

  @media screen and (max-width: 1640px) {
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    margin-left: 120px;
    align-items: center;
    margin-top: 0;
  }

  @media screen and (max-width: 769px) {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const Content = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  max-width: 100%;
  height: auto;
`;

export const Texts = styled.span`
  margin-top: 25px;
  font-size: 14px;
  line-height: 25px;
  width: 200px;
  p {
    line-height: 20px;
    margin-top: 20px;
    max-width: 621px;
    font-size: 0.8rem;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin-top: 56px;
  max-width: 100%;
  height: auto;
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

export const Title = styled.div`
  position: relative;
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

export const Section = styled.div`
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;

    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Container = styled.section`
  display: flex;
  margin: 210px 0 0 80px;

  @media screen and (max-width: 1640px) {
    max-width: 100%;
    margin: 208px 0px 0px 20px;
  }

  @media (max-width: 900px) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    }
  
`;
