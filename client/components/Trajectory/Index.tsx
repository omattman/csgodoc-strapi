import React from "react";
import Player from "./Player";
import Path from "./Path";
import AOE from "./AOE";

function TrajectorySVG(props) {
  console.log(props.selectedOption)
  if (props.startX !== 0) {
    return (
      <g className={props.nadeClass}>
        <Player startX={props.startX} startY={props.startY} team={props.team} />
        <Path
          startX={props.startX}
          startY={props.startY}
          midX={props.midX}
          midY={props.midY}
          endX={props.endX}
          endY={props.endY}
          lines={props.lines}
        />
        <AOE endX={props.endX} endY={props.endY} selectedOption={props.selectedOption} />
      </g>
    );
  } else {
    return null;
  }
}


export default TrajectorySVG;