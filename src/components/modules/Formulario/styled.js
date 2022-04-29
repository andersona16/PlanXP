import styled from "styled-components";

export const Text = styled.p`
  margin: 10px 0;
`;
export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #464646;
  max-width: 100%;
  border-radius: 0 18px 0 0;
  font-size: 18px;
  padding: 5px;
  max-height: 100%;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const InputField = styled.div`
  width: 48%;
`;

export const Textarea = styled.textarea`
  background-color: transparent;
  border: 1px solid #464646;
  width: 100%;
  border-radius: 0 18px 0 0;
  resize: none;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  cursor: pointer;
  margin-top: 20px;
  background-color: transparent;
  color: #939598;
  border: none;
  font-size: 22px;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #464646;
    color: #fff;
  }

  img {
    margin-left: 5px;
  }
`;

export const Container = styled.section`
  form {
    margin-top: 40px;
    width: 100%;
    width: 600px;
    @media screen and (max-width: 320px) {
      width: 300px;
      max-width: 100%;
    }
    @media screen and (max-width: 425px) {
      width: 300px;
      max-width: 100%;
    }
  }
`;

export const Content = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
