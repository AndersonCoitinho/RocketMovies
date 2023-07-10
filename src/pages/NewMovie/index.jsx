import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { Container, Form } from './style'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import { api } from '../../services/api'

export function NewMovie() {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags((prevState) => prevState.filter((tag) => tag !== deleted));
    }


    async function handleNewNote() {
        if (!title) {
            return alert("Digite o título do filme");
        }

        if (!rating) {
            return alert("Digite a nota do filme");
        }

        const isRatingValid = rating >= 0 && rating <= 5;

        if (!isRatingValid) {
            return alert("A nota do filme deve ser entre 0 e 5");
        }

        if (newTag) {
            return alert(
                "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
            )
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });

        alert("Filme cadastrado com sucesso!")
        navigate("/")
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
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <NoteItem
                                isNew
                                placeholder="Novo tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>


                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
            </main>
        </Container>
    )
}