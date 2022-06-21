import { RiShutDownLine } from "react-icons/ri";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/felipe-gomes-vicente.png"
          alt="Foto do usuário" 
        />
        
        <div>
          <span>Bem-vindo</span>
          <strong>Felipe Vicente</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}