import { Container, Form, Avatar } from './style'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/cinema.png'
import { api } from '../../services/api'


export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder /*se nao tiver avatar vai para o avatarpadrao*/
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)


    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({ user, avatarFile })/*referenciar o avatarFile*/
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]/*pega a primeira posição*/
        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }



    return (
        <Container>
            <header>
                <Link to="/">
                    <p><FiArrowLeft /> Voltar</p>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar}
                        alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        /> </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    value={passwordOld}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    value={passwordNew}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}