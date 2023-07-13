import { Container, Brand, Search, Profile, Logout } from "./style";
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/cinema.png'
import { useNavigate } from "react-router-dom";
import { ButtonText } from '../ButtonText'


export function Header({ children }) {

    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    function handleBack() {
        navigation("/");
    }


    return (
        <Container>
            <Brand>
                <ButtonText onClick={handleBack}>
                    <h1>RocketMovies</h1>
                </ButtonText>
            </Brand>

            <Search>{children}</Search>

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                </div>

                <img src={avatarURL} alt={user.name} />
            </Profile>

            <Logout onClick={handleSignOut}>Sair</Logout>
        </Container>
    )
}