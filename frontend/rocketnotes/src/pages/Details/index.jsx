  import { Button } from "../../components/Button";
  
  import { Container } from "./styles";
  
  export function Details() {

    return (
      <Container>
        <h1>Hello World!!!</h1>
        <Button title="Entrar" loading />
        <Button title="Cadastrar" />
        <Button title="Voltar" />
      </Container>
    )
  }
