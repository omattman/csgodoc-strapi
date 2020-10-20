import React from "react";
import styled from "@emotion/styled";

function Player(props) {
  return <Circle cx={props.startX} cy={props.startY} r="7" team={props.team} />;
}

const Circle = styled.circle`
  paint-order: stroke;
  stroke: ${props =>
    props.team == "terrorist"
      ? "rgba(255,227,5, 0.4)"
      : "rgba(85, 133,254, 0.6)"};
  stroke-width: 7px;
`

export default Player;