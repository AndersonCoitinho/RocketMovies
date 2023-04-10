import { Container, Content } from "./style"
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {
  return (
    <Container>
      <Header />
      
      <main>
      
        <Content>
        <p><FiArrowLeft /> Voltar</p>
          <h1>Interestellar</h1>
          <div>
            <img
              src="https://github.com/andersoncoitinho.png"
              alt="Foto do Usuario"
            />
            Por Anderson Coitinho
          </div>

          <Section title="Marcadores">
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </Section>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus quis, voluptates et aliquam harum earum eos.
            Libero iure incidunt itaque exercitationem. Quos doloremque tenetur consectetur nulla adipisci, labore soluta! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos culpa dicta vitae deserunt consequuntur, a in cum assumenda facilis inventore consectetur harum veritatis
            pariatur autem, modi perferendis tempore cupiditate mollitia.</p>

        </Content>
      </main>
    </Container>
  )
}