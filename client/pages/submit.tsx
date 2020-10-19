import React, { useState, useEffect } from 'react'
import DATA from "../data/mapData";
import MapOverlay from '../components/MapOverlay'

function SubmitUtility() {
  const [mapChoice, setMapChoice] = useState("Inferno")
  const [mapImage, setMapImage] = useState("")
  const [selectedOption, setSelectedOption] = useState("Smoke")
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [midX, setMidX] = useState(0)
  const [midY, setMidY] = useState(0)
  const [endX, setEndX] = useState(0)
  const [endY, setEndY] = useState(0)
  const [starterFlag, setStarterFlag] = useState(true)
  const [midFlag, setMidFlag] = useState(false)
  const [lines, setLines] = useState("1")

  // TODO: To be developed
  // const [selectedSideOption, setSelectedSideOption] = useState("T")
  // const [utilityTitle, setUtilityTitle] = useState("")
  // const [utilityURL, setUtilityURL] = useState("")

  useEffect(() => {
    DATA.forEach(mapObj => {
      if (mapObj.mapTitle === mapChoice) {
        setMapImage(mapObj.overlaysrc)
      }
    })
  })

  const mouseClicker = event => {
    let svgElem = document.getElementById("svgID") as unknown as SVGSVGElement;
    let pos = svgElem.createSVGPoint();

    // Returns a DOMMatrix representing the matrix that transforms
    // the current element's coordinate system to the coordinate
    // system of the SVG viewport for the SVG document fragment.
    let matrix = event.target.getScreenCTM();

    pos.x = event.clientX;
    pos.y = event.clientY;

    if ((matrix = matrix.inverse()))
      pos = pos.matrixTransform(matrix);

    let x = Math.floor(pos.x);
    let y = Math.floor(pos.y);

    if (starterFlag) {
      setStartX(x)
      setStartY(y)
      setStarterFlag(false)
      setMidFlag(true)
    } else if (midFlag && lines === "2") {
      // Implement functionality to handle cases
      // where utility might bounce of a wall and
      // change direction, thus needing another line.
      return 0;
    } else {
      setEndX(x)
      setEndY(y)
      setStarterFlag(true)
    }
  };

  return (
    <div>
      <MapOverlay
        mapImage={mapImage}
        mouseClicker={mouseClicker}
        startX={startX}
        startY={startY}
        midX={midX}
        midY={midY}
        endX={endX}
        endY={endY}
        selectedOption={selectedOption}
        lines={lines}
      />
    </div>
  )
}

export default SubmitUtility;
