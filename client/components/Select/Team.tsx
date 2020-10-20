import React from 'react'
import { Field } from 'formik';

function Team(props) {
  return (
    <Field
      as="select"
      value={props.team}
      onChange={props.handleTeamChange}
    >
      <option value="counter-terrorist">Counter-Terrorist</option>
      <option value="terrorist">Terrorist</option>
    </Field>
  )
}

export default Team