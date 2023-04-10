import styled from "styled-components";

export const Container = styled.header`
    height: 105px;
    width: 100%;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        padding: 42px 0 0 0;
        font-size: 24px;
    }

    display: flex;
    justify-content: space-between;
    padding: 0 123px 0 123px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;

        span {
            font-size: 14px;
            text-align: right;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 30px 0 30px 0;
`;