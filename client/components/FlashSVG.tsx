import React from "react";
import StartSVG from "./StartSVG";
import LineSVG from "./LineSVG";

function FlashSVG(props) {
  const End = props => {
    if (props.endX !== 0) {
      return (
        <React.Fragment>
          <circle cx={props.endX} cy={props.endY} r="4" stroke='#ccc' />
        </React.Fragment>
      );
    } else {
      return null;
    }
  }

  return (
    <g className={props.nadeClass}>
      <StartSVG startX={props.startX} startY={props.startY} />
      <LineSVG
        startX={props.startX}
        endX={props.endX}
        midX={props.midX}
        midY={props.midY}
        startY={props.startY}
        endY={props.endY}
        lines={props.lines}
      />
      <End endX={props.endX} endY={props.endY} />
    </g>
  );
}

export default FlashSVG;