import { Container, Form, Content } from "./style";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom'

export function Home() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/newMovie">
                        <Button title="Adicionar filme" />
                        </Link>
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