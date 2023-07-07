import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { Container, Form } from './style'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

export function NewMovie() {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("")

    async function handleNewNote() {
        await api.post("/notes", {
            title,
            description,
            rating,
            links
        });

        alert("Filme cadastrado com sucesso!")
    }


    function handleAdLink() {
        setLinks(prevState => [...prevState, newLink])/*vai manter os anteriores com o novo link*/
        setNewLink("")
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }


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

                    <Input
                        placeholder="Titulo"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                        placeholder="Sua Note (de 0 a 5)"
                        onChange={e => setRating(e.target.value)}
                    />
                    <TextArea
                        placeholder="Observações..."
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder="Novo marcador"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAdLink}
                        />
                    </Section>

                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
            </main>
        </Container>
    )
}