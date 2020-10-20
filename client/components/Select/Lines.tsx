import React from 'react'
import { Field } from 'formik';

function Lines(props) {
  return (
    <Field
      as="select"
      value={props.lines}
      onChange={props.handleLinesChange}
    >
      <option value="1">Single</option>
      <option value="2">Double</option>
    </Field>
  )
}

export default Lines