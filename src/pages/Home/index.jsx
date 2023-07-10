import { Container, Form, Content } from "./style";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { useState, useEffect } from "react";
import { Movie } from "../../components/Movie";
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'

export function Home() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/notes?title=${search}`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [search]);

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }


    return (
        <Container>
            <Header>
                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

            <main>
                <Form>
                    <header>
                        <Link to="/newMovie">
                            <Button title="Adicionar filme" />
                        </Link>
                    </header>
                </Form>

                <Content>
                    {
                        movies.map(movie => (
                            <Note
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleDetails(movie.id)}
                            />
                        ))
                    }
                </Content>

            </main>
        </Container>
    )
}