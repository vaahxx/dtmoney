import { Container, Content } from "./styles";
const logoImg: string = require("../../assets/logo.svg").default;

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
