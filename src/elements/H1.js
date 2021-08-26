import styled from 'styled-components';

export default styled.h1`
color: ${(props) => props.theme.color};
font-size: ${(props) => props.theme.fontSize};
font-family: ${(props) => props.theme.fontFamily};
`;