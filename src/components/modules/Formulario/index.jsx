import React, { useState } from "react";
import arrowRight from "../../../assets/img/whiteArrow.png";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
  Text,
  Input,
  Field,
  InputField,
  Textarea,
  Button,
  Content,
} from "./styled";

const Formulario = () => {
  const TestKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const verifyCallback = async (value) => {
    value.length > 0 ? setCaptcha(true) : setCaptcha(false);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (
      name.length > 0 &&
      email.length > 0 &&
      telefone.length > 0 &&
      message.length > 0
    ) {
      if (captcha === true) {
        alert(` Muito Obrigado ${name}, suas informações foram salvas!`);
        setName("");
        setEmail("");
        setTelefone("");
        setMessage("");
      } else {
        alert("Faça a verificação ReCAPTCHA, por favor!");
      }
    } else {
      alert("Preencha todos os campos do formulario, por favor!");
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handletelefone = (e) => {
    setTelefone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <Content>
          <Text>Nome:</Text>
          <Input type="text" onChange={handleName} />
        </Content>
        <Field>
          <InputField>
            <Text>E-mail:</Text>

            <Input type="email" onChange={handleEmail} />
          </InputField>
          <InputField>
            <Text>Telefone:</Text>

            <Input type="text" onChange={handletelefone} />
          </InputField>
        </Field>
        <Content>
          <Text>Mensagem:</Text>
          <Textarea cols="30" rows="10" onChange={handleMessage}></Textarea>
        </Content>
        <ReCAPTCHA sitekey={TestKey} onChange={verifyCallback} />
        <Button type="submit">
          Enviar
          <img src={arrowRight} alt="Flecha icone" />
        </Button>
      </form>
    </Container>
  );
};

export default Formulario;
