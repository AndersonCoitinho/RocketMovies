import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;

    width: 100%;
    max-width: 113.7rem;
    margin: 1rem auto;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1rem;

      h1 {
        font-weight: 400;
      }
    }
  }
`;

export const Form = styled.form`
    max-width: 100%;
    margin: auto;

  
    > header {
      
    justify-content: flex-end;
}
`;

export const Content = styled.div`
  max-height: calc(100vh - 35vh);
  overflow-y: auto;
  
    

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;