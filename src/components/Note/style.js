import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    height: 222px;
    background: rgba(255, 133, 155, 0.05);
    border: none;
    border-radius: 16px;
    padding: 32px;

    flex-direction: column;
    align-items: flex-start;
    margin-top: 24px;


    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    > p {
        margin-top: 24px;
        align-items: flex-start;
        text-align: justify;
        font-family: 'Roboto';
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    }


    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;