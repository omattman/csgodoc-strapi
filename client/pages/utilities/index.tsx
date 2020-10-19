import getConfig from 'next/config'
import fetch from "isomorphic-unfetch";
// import styled from "@emotion/styled";

import { Utility } from '../../interfaces'

import Player from "../../components/Player"

type Props = {
  utilities: Utility[]
}

function UtilitiesPage({ utilities }: Props) {
  return (
    <div>
      {utilities.map((utility, index) => {
        return (
          <div key={index}>
            <p>{utility.title}</p>
            <p>{utility.map.name}</p>
            <p>{utility.team.name}</p>
            <p>{utility.type}</p>
            <Player url={utility.video} />
          </div>
        )
      })}
    </div>
  )
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/utilities/`);
  const data = await res.json();

  return { props: { utilities: data } };
}


export default UtilitiesPage;
