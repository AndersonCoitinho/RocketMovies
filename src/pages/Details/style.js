import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content"
;

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 2rem 0;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px
    }

    a {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`;

export const Content = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
        padding-bottom: 1rem;        
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        margin-bottom: 1rem;
    }

    > div img {
        width: 24px;
        height: 24px;
        border-radius: 35px;
        border: 1px solid #3E3B47;

    }

    > div {
        display: flex;
        gap: .5rem;
    }

    > section{
        padding: 1rem 1rem .5rem 0;
    }
`;