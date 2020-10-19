import React, { Component } from "react";
import StartSVG from "./StartSVG";
import LineSVG from "./LineSVG";

function SmokeSVG(props) {
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
        startY={props.startY}
        midX={props.midX}
        midY={props.midY}
        endX={props.endX}
        endY={props.endY}
        lines={props.lines}
      />
      <End endX={props.endX} endY={props.endY} />
    </g>
  );
}

export default SmokeSVG;