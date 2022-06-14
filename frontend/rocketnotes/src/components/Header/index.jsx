
import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/felipe-gomes-vicente.png"
          alt="Foto do usuário" 
        />
        
        <div>
          <span>Bem-vindo</span>
          <strong>Felipe Vicente</strong>
        </div>
      </Profile>
    </Container>
  )
}