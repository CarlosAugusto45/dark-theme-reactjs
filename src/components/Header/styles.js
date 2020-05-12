import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 50px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  div {
    > svg {
      margin: 0 3px;
    }
  }
`;
