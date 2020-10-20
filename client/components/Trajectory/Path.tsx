import React from "react";
import styled from "@emotion/styled";

// TODO: Oh boi this is some mess. Please clean it up hehe.

function Path(props) {
  if (props.lines === "1") {
    if (props.endX !== 0) {
      return (
        <Line
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
        <Line
          x1={props.startX}
          x2={props.midX}
          y1={props.startY}
          y2={props.midY}
        />
      );
    } else if (props.midX !== 0 && props.endX !== 0) {
      return (
        <React.Fragment>
          <Line
            x1={props.startX}
            x2={props.midX}
            y1={props.startY}
            y2={props.midY}
          />
          <circle cx={props.midX} cy={props.midY} r=".001" />
          <Line
            x1={props.midX}
            x2={props.endX}
            y1={props.midY}
            y2={props.endY}
          />
        </React.Fragment>
      );
    } else if (props.endX !== 0) {
      return (
        <Line
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

const Line = styled.line`
  stroke: rgba(255,255,255, 0.4);
  stroke-width: 4;
`

export default Path;