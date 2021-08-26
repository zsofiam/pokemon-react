import styled from 'styled-components';

export default styled.nav`
background: ${(props) => props.theme.background};
textAlign: center;
padding: 10px;
&:hover {
    background: ${(props) => props.theme.backgroundHover};
  }
`;