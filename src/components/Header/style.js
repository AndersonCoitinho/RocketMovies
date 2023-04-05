import styled from "styled-components";

export const Container = styled.header`
    height: 105px;
    width: 100%;
    background: red;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%
    }
`;
