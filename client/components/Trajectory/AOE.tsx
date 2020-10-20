import React, { useState } from 'react'
import styled from "@emotion/styled";

function AOE(props) {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setHover(false)
    }, 200);
    return () => clearTimeout(timer);
  }

  if (props.endX !== 0) {
    return (
      <React.Fragment>
        <Circle
          cx={props.endX}
          cy={props.endY}
          r="8"
          selectedOption={props.selectedOption}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isHovered={hover}
        />
      </React.Fragment>
    );
  } else {
    return null;
  }
}

const Circle = styled.circle`
  paint-order: stroke;
  fill: ${props =>
    props.selectedOption == "grenade"
      ? "rgba(200, 0, 28, 1)"
      : props.selectedOption == "flash"
        ? "rgba(6, 127, 204, 1)"
        : props.selectedOption == "molotov"
          ? "rgba(227, 150, 10, 1)"
          : "#ffffff"};
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 24px;
  transition: ${props => props.isHovered
    ? '.2s ease-in-out'
    : '0s'};

  &:hover {
    fill: "#ffffff";
    stroke: ${props =>
    props.selectedOption == "grenade"
      ? "rgba(200, 0, 28, 0.4)"
      : props.selectedOption == "flash"
        ? "rgba(6, 127, 204, 0.4)"
        : props.selectedOption == "molotov"
          ? "rgba(227, 150, 10, 0.4)"
          : "rgba(255, 255, 255, 0.4)"};
    stroke-width: 34px;
  }
`

export default AOE