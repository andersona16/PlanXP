import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  gap: 20px;


  @media (max-width: 1150px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  
    gap: 40px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 190px;
  p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 25px;
  }
  .action {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  span {
    font-size: 14px;

    text-transform: uppercase;
    color: #939598;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 1px #fff;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(0.7);
    }
    &:after {
      transform-origin: 0% 50%;
    }

    img{
      margin-left: 10px;
    }
  }
`;

export const CardImage = styled.div`
  display: flex;
  height: 190px;
  align-items: flex-end;
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
    z-index: -999;
    font-size: 100px;
    font-weight: bold;
    color: #292929;
  }
`;

export const Texts = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 25px;
    color: #939598;
    margin-bottom: 15px;
  }
  span {
    font-size: 18px;
    color: #939598;
  }
  p {
    margin-top: 15px;
    font-size: 18px;

    max-width: 90%;
  }
`;

export const One = styled.section`
  display: flex;
  flex-direction: column;


  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Container = styled.section`
  display: flex;
  margin: 180px 0 0 80px;
  @media (max-width: 1360px){
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }


  @media (max-width: 900px) {
    flex-direction: column;
    margin: 20px 10px 100px;
    align-items: center;
    .title {
      span {
        top: -30px;
      }
    }
    .texts {
      margin-top: 10px;
      h2 {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
      p {
        margin: 20px 0;
        font-size: 16px;
        max-width: 100%;
      }
    }

    .cards {
      flex-direction: column;
      align-items: center;

      .card {
        position: relative;
        width: 100%;
        p {
          margin-top: 20px;
          font-size: 14px;
          line-height: 20px;
        }
        .cardImage {
          display: flex;
          height: 100%;
          justify-content: center;
          img {
            width: 100%;
          }
          .icon {
            width: fit-content;
          }
        }
        .action {
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 50px;
        }
        span {
          font-size: 16px;
          text-transform: uppercase;
          color: #939598;
          img {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;
