import React, { useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import styled from "@emotion/styled";
import fetch from "isomorphic-unfetch";

import VideoPlayer from "../../components/VideoPlayer"
import Layout from '../../components/Layout'

function MapIndex({ map }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [videoUrl, setVideoURl] = useState(map.utilities[0].video)
  const [autoPlay, setAutoPlay] = useState(false)
  const [videoPlay, setVideoPlay] = useState(false)

  return (
    <Layout>
      <App>
        <PageContainer>
          <Wrapper>
            <UtilityMedia>
              <p>{map.name}</p>
              <VideoPlayer url={videoUrl} autoplay={autoPlay} playing={videoPlay} />
              <CalloutsImage>
                <img src={`http://localhost:1337` + map.callouts_image.formats.medium.url} />
              </CalloutsImage>
            </UtilityMedia>
            <Utilities>
              <div>
                {map.utilities.map((utility, index) => {
                  return (
                    <React.Fragment key={index}>
                      {utility.team === 1 &&
                        <Utility onClick={() => [
                          setVideoURl(utility.video),
                          setAutoPlay(true),
                          setVideoPlay(true)
                        ]}>
                          <UtilityDescription>
                            <p>{utility.title}</p>
                            <p>{utility.type}</p>
                          </UtilityDescription>
                          {utility.images.map((image, index) => {
                            return (
                              <UtilityThumbnail key={index} style={{
                                backgroundImage: "url(" + "http://localhost:1337" + image.formats.large.url + ")",
                                backgroundPosition: 'center',
                                backgroundSize: '300% 300%',
                                backgroundRepeat: 'no-repeat'
                              }} />
                            )
                          })}
                        </Utility>
                      }
                    </React.Fragment>
                  )
                })}
              </div>
            </Utilities>
          </Wrapper>
        </PageContainer>
      </App>
    </Layout>
  )
}

export const getServerSideProps = async ctx => {
  const { slug } = ctx.query;

  const res = await fetch(`http://localhost:1337/maps?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      map: data[0]
    },
  };
}

const App = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  --column-max-width: 100px;
  background: #202225;
  color: #eeeeee;
  padding: 0px;
  margin: 0px;
`

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  transition: all .2s;
`
const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: [full-start] minmax(10px,1fr) [main-start] repeat(12,[col-start] minmax(10px,var(--column-max-width))) [main-end] minmax(10px,1fr) [full-end];
  grid-column-gap: 30px;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: [full-start] minmax(10px,1fr) [main-start] repeat(6,[col-start] minmax(10px,var(--column-max-width))) [main-end] minmax(10px,1fr) [full-end];
  }
`

const UtilityMedia = styled.div`
  grid-column: col-start 1/span 6;
  position: relative;
  height: 100vh;

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: rgba(40,40,40,.2);
    right: -30px;
    top: 0;
  }

  @media screen and (max-width: 600px) {
    grid-column: col-start 1/span 6;
    grid-column-start: col-start auto;
  }
`

const Utilities = styled.div`
  grid-column: col-start 7/span 6;
  position: relative;
  padding-left: 30px;

  @media screen and (max-width: 600px) {
    grid-column: col-start 1/span 7;
    grid-column-start: col-start auto;
  }
`

const CalloutsImage = styled.figure`
  margin: 0px;
  margin-top: 20px;

  img {
    max-width: 100%;
  }
`

const Utility = styled.div`
  display: grid;
  width: 100%;
  // margin-top: 12px;
  margin-right: auto;
  // margin-bottom: 12px;
  margin-left: auto;
  grid-template-columns: [full-start] minmax(10px,1fr) [main-start] repeat(12,[col-start] minmax(10px,var(--column-max-width))) [main-end] minmax(10px,1fr) [full-end];
  grid-column-gap: 30px;
  // background: #3c3c3c;
  border-bottom: 1px solid rgba(40,40,40,.2);

  &:hover,
  &:focus,
  &:active {
    background-color: #7289DA;
  }
`

const UtilityDescription = styled.div`
  grid-column: col-start 1/span 7;
  position: relative;
  padding: 30px 15px;
`

const UtilityThumbnail = styled.div`
  grid-column: col-start 8/span 6;
  // position: absolute;
  width: 100%;
  height: 100%;
`

export default MapIndex;
