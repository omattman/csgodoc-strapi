import React from "react";

// TODO: Oh boi this is some mess. Please clean it up hehe.

function LineSVG(props) {
  if (props.lines === "1") {
    if (props.endX !== 0) {
      return (
        <line
          x1={props.startX}
          x2={props.endX}
          y1={props.startY}
          y2={props.endY}
        />
      );
    }
  } else if (props.lines === "2") {
    if (props.midX !== 0 && props.endX === 0) {
      return (
        <line
          x1={props.startX}
          x2={props.midX}
          y1={props.startY}
          y2={props.midY}
        />
      );
    } else if (props.midX !== 0 && props.endX !== 0) {
      return (
        <React.Fragment>
          <line
            x1={props.startX}
            x2={props.midX}
            y1={props.startY}
            y2={props.midY}
          />
          <circle cx={props.midX} cy={props.midY} r=".001" />
          <line
            x1={props.midX}
            x2={props.endX}
            y1={props.midY}
            y2={props.endY}
          />
        </React.Fragment>
      );
    } else if (props.endX !== 0) {
      return (
        <line
          x1={props.startX}
          x2={props.endX}
          y1={props.startY}
          y2={props.endY}
        />
      );
    }
  }
  if (props.endX !== 0) {
  } else {
    return null;
  }
}

export default LineSVG;