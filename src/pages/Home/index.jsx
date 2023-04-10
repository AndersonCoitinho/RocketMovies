import { Container, Form, Content } from "./style";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Button title="Adicionar filme" />
                    </header>
                </Form>

                <Content>
                    <Section title="Meus Filmes">
                        <Note data={{
                            title: 'Interestellar',
                            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. ',
                            tags: [
                                { id: '1', name: 'Ficção Cientifica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Familia' }
                            ]
                        }} />

                        <Note data={{
                            title: 'Interestellar',
                            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. ',
                            tags: [
                                { id: '1', name: 'Ficção Cientifica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Familia' }
                            ]
                        }} />

                        <Note data={{
                            title: 'Interestellar',
                            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. ',
                            tags: [
                                { id: '1', name: 'Ficção Cientifica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Familia' }
                            ]
                        }} />

                        <Note data={{
                            title: 'Interestellar',
                            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. ',
                            tags: [
                                { id: '1', name: 'Ficção Cientifica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Familia' }
                            ]
                        }} />
                    </Section>
                </Content>
            </main>
        </Container>
    )
}