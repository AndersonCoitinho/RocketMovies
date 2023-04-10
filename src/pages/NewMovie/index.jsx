import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './style'

import { Link } from 'react-router-dom'

export function NewMovie() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Novo Filme</h1>
                        
                            <Link to="/">
                                Voltar
                            </Link>
                            
                        
                    </header>

                    <Input placeholder="Titulo" />
                    <Input placeholder="Sua Note (de 0 a 5)" />
                    <TextArea placeholder="Observações " />

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Novo Marcador" />
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}