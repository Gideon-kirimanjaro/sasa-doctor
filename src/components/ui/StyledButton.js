import styled from "styled-components";

export const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#51cefd" : "white")};
  color: ${(props) => (props.primary ? "white" : "#51cefd")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #51cefd;
  border-radius: 3px;
`;
