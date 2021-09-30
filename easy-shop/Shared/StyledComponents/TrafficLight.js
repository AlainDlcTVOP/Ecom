import styled, { css } from "styled-components";

const TrafficLight = styled.View`
border-radius:80px;
width: 10px;
height: 10px;
padding: 10px;

${(props) =>
    props.available &&
    css`
    backgorund: #afec1a;
    `}

    ${(props) =>
        props.limited &&
        css`
        backgorund: #dde0033;
        `}

        ${(props) =>
            props.unavailable &&
            css`
            backgorund: #ex241a;
            `}
`;

export default TrafficLight;