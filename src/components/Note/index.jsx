import { Container } from './style';
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.name} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}