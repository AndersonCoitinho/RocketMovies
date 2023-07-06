import { Container, Profile, Search } from './style';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'


export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Anderson Coitinho</strong>
                    <span onClick={signOut}>sair</span>
                </div>
                <img
                    src="https://github.com/andersoncoitinho.png"
                    alt="Foto do Usuario"
                />
            </Profile>


        </Container>
    )
}