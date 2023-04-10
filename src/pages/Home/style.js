import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    max-width: 550px;
    margin: auto;

    > header {
        display: flex;
    }
`;

export const Content = styled.div`
    padding: 0 64px;
    overflow-y: scroll;
`;
