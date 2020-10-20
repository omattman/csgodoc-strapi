import React from 'react'
import { Field } from 'formik';

function UtilityType(props) {
  return (
    <Field
      as="select"
      value={props.utilityChoice}
      onChange={props.handleUtilityTypeChange}
    >
      <option value="smoke">Smoke</option>
      <option value="flash">Flash</option>
      <option value="molotov">Molotov</option>
      <option value="grenade">Grenade</option>
    </Field>
  )
}

export default UtilityType