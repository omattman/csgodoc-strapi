import React from "react";
import styled from "@emotion/styled";
import UtilitySVG from "./UtilitySVG";

function MapOverlay(props) {
  return (
    <div>
      <img
        src={props.mapImage}
        onLoad={props.onLoad}
      />
      {/* TODO: Set viewbox equal to img size to avoid overflow */}
      <StyledSVG
        id="svgID"
        viewBox="0 0 250 250"
        preserveAspectRatio="none"
        onClick={props.mouseClicker}
      >
        {/* TODO: Implement React.Context to avoid Prop Drilling */}
        <UtilitySVG
          startX={props.startX}
          startY={props.startY}
          midX={props.midX}
          midY={props.midY}
          endX={props.endX}
          endY={props.endY}
          selectedOption={props.selectedOption}
          lines={props.lines}
        />
      </StyledSVG>
    </div>
  );
}

const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  g {
    stroke: #fff;
    fill: #fff;
    stroke-width: 1;
    opacity: .4;
  }
`

export default MapOverlay;