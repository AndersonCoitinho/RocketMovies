import { Container } from './style';

export function Tag({ title, description, ...rest }){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
} 