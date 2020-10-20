import React, { useState, useEffect } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { Formik, Form, FormikHelpers } from 'formik';

import MapOverlay from '../components/MapOverlay'
import {
  SelectMap,
  SelectTeam,
  SelectUtilityType,
  SelectLines
} from '../components/Select/Index'

import { IUtilityFormValues } from '../interfaces/index'


function SubmitUtility(
  { maps }: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [mapChoice, setMapChoice] = useState("Inferno")
  const [mapImage, setMapImage] = useState("")
  const [team, setTeam] = useState("ct")
  const [selectedOption, setSelectedOption] = useState("smoke")
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
  // const [utilityTitle, setUtilityTitle] = useState("")
  // const [utilityURL, setUtilityURL] = useState("")

  // TODO: Change url to make use of .env file
  useEffect(() => {
    maps.forEach(map => {
      if (map.name === mapChoice) {
        setMapImage(`http://localhost:1337` + map.callouts_image.url)
      }
    })
  })

  const clearSVGPaths = () => {
    setStartX(0)
    setStartY(0)
    setMidX(0)
    setMidY(0)
    setEndX(0)
    setEndY(0)
    setStarterFlag(true)
    setMidFlag(false)
  }

  const handleMapChange = event => {
    setMapChoice(event.target.value)

    maps.forEach(map => {
      if (map.name === event.target.value) {
        setMapImage(`http://localhost:1337` + map.callouts_image.url)
        clearSVGPaths()
      }
    })
  }

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
      setMidX(x)
      setMidY(y)
      setMidFlag(false)
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
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<IUtilityFormValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <SelectMap
            data={maps}
            mapChoice={mapChoice}
            handleMapChange={handleMapChange} />
          <SelectTeam
            team={team}
            handleTeamChange={(e) => setTeam(e.target.value)} />
          <SelectUtilityType
            utilityChoice={selectedOption}
            handleUtilityTypeChange={(e) => setSelectedOption(e.target.value)} />
          <SelectLines
            lines={lines}
            handleLinesChange={(e) => setLines(e.target.value)} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <button onClick={clearSVGPaths}>Clean up</button>
      <MapOverlay
        mapImage={mapImage}
        mouseClicker={mouseClicker}
        startX={startX}
        startY={startY}
        midX={midX}
        midY={midY}
        endX={endX}
        endY={endY}
        team={team}
        selectedOption={selectedOption}
        lines={lines}
      />
    </div>
  )
}

export async function getServerSideProps() {
  const mapsRes = await fetch(`http://localhost:1337/maps/`);
  const mapsData = await mapsRes.json();

  return {
    props: {
      maps: mapsData
    }
  };
}

export default SubmitUtility;
