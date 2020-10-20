import React from 'react'
import { Field } from 'formik';

function Map(props) {
  return (
    <Field
      as="select"
      value={props.mapChoice}
      onChange={props.handleMapChange}
    >
      {props.data.map((map, index) => {
        return (
          <option key={index} value={map.name}>{map.name}</option>
        )
      })}
    </Field>
  )
}

export default Map