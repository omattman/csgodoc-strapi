import React from "react";
import styled from "@emotion/styled";
import Trajectory from "./Trajectory/Index";

function MapOverlay(props) {
  return (
    <div style={{ marginTop: '40px' }}>
      <img
        src={props.mapImage}
        onLoad={props.onLoad}
        style={{ maxWidth: '1000px', userSelect: 'none' }}
      />
      <StyledSVG
        id="svgID"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        onClick={props.mouseClicker}
      >
        {/* TODO: Implement React.Context to avoid Prop Drilling */}
        <Trajectory
          startX={props.startX}
          startY={props.startY}
          midX={props.midX}
          midY={props.midY}
          endX={props.endX}
          endY={props.endY}
          team={props.team}
          selectedOption={props.selectedOption}
          lines={props.lines}
        />
      </StyledSVG>
    </div>
  );
}

const StyledSVG = styled.svg`
  position: absolute;
  left: 0;
  max-width: 1000px;
  max-height: 1000px;

  g {
    fill: #fff;
  }
`

export default MapOverlay;