import React from "react";
import SmokeSVG from "./SmokeSVG";
import FlashSVG from "./FlashSVG";
import MolotovSVG from "./MolotovSVG";

// TODO: Implement React.Context to avoid Prop Drilling
// TODO: Implement functionality to swap between utilities through props.nadeClass
// TODO: Create single component to handle utilities instead of three variants

function UtilitySVG(props) {
  if (props.startX !== 0) {
    if (props.selectedOption === "Smoke") {
      return (
        <SmokeSVG
          startX={props.startX}
          startY={props.startY}
          midX={props.midX}
          midY={props.midY}
          endX={props.endX}
          endY={props.endY}
          nadeClass={props.nadeClass}
          lines={props.lines}
        />
      );
    } else if (props.selectedOption === "Flash") {
      return (
        <FlashSVG
          startX={props.startX}
          startY={props.startY}
          midX={props.midX}
          midY={props.midY}
          endX={props.endX}
          endY={props.endY}
          nadeClass={props.nadeClass}
          lines={props.lines}
        />
      );
    } else if (props.selectedOption === "Molotov") {
      return (
        <MolotovSVG
          startX={props.startX}
          startY={props.startY}
          midX={props.midX}
          midY={props.midY}
          endX={props.endX}
          endY={props.endY}
          nadeClass={props.nadeClass}
          lines={props.lines}
        />
      );
    }
  } else {
    return null;
  }
}

export default UtilitySVG;