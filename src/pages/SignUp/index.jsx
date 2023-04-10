import { Background, Container, Form } from './style'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'


export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />

                <a href=''>
                    Voltar para o login
                </a>
            </Form>

            <Background />
        </Container>
    )
}