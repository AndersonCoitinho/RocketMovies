import { Container, Content } from "./style"
import { FiArrowLeft } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Tag } from '../../components/Tag'
import { api } from '../../services/api'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/cinema.png"


export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleBack() {
    navigate("/")
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;


    async function handleRemove() {
      const confirm = window.confirm("Deseja realmente remover o filme?");
  
      if (confirm) {
        await api.delete(`/notes/${params.id}`);
        navigate(-1);
      }
    }



  return (
    <Container>
      <Header />
      {
        data &&

        <main>
          <Content>
            <ButtonText onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </ButtonText>

            <h1>{data.title}</h1>

            <div>
              <img
                src={avatarURL}
                alt={user.name}
              />
              Por {user.name}
            </div>

            {data.tags && (
              <section>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </section>
            )}

            <p>{data.description}</p>

            <div>
              <Button
                title="Excluir filme"
                onClick={handleRemove}
              />
            </div>
          </Content>
        </main>

      }
    </Container>
  )
}