import React from 'react'
import styled from "@emotion/styled";

import ReactPlayer from 'react-player';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

type Props = {
  url: string
  autoplay: boolean
  playing: boolean
}

const VideoPlayer = ({ url, autoplay, playing }: Props) => {
  return (
    <PlayerWrapper>
      <StyledReactPlayer
        url={url}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload"
            }
          }
        }}
        controls={true}
        volume={0}
        muted={true}
        autoplay={autoplay}
        playing={playing}
        width='100%'
        height='100%'
      />
    </PlayerWrapper>
  )
}

export default VideoPlayer;