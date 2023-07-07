import { Container, Profile, Search } from './style';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/cinema.png'



export function Header() {
    
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>

            <Profile to="/profile">
                <div>
                <strong>{user.name}</strong>
                    <span onClick={signOut}>sair</span>
                </div>
                <img
                    src={avatarUrl}
                    alt="Foto do Usuario"
                />
            </Profile>


        </Container>
    )
}