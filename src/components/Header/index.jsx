import { Container, Profile } from './style';

export function Header() {
    return (
        <Container>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>

            <div>
                <strong>Anderson Coitinho</strong>
                <span>sair</span>
            </div>
            <Profile>
                <img
                    src="https://github.com/andersoncoitinho.png"
                    alt="Foto do Usuario"
                />
            </Profile>
        </Container>
    )
}