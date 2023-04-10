import { Container, Profile, Search } from './style';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input'

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Profile>
                <div>
                    <strong>Anderson Coitinho</strong>
                    <span>sair</span>
                </div>
                <img
                    src="https://github.com/andersoncoitinho.png"
                    alt="Foto do Usuario"
                />
            </Profile>
        </Container>
    )
}