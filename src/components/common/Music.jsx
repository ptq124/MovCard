import React, { useState } from 'react'
import MusicOff from './MusicOff'
import MusicOn from './MusicOn'
export default function Music() {
  const [isMusic, toggleMusic] = useState(false)
  const MusicCss = 'absolute right-[4rem] bottom-[2rem]'
  const size = { width: 32, height: 32 }
  return (
    <button
      onClick={() => {
        toggleMusic(!isMusic)
      }}
    >
      {isMusic && <MusicOn value={size} css={MusicCss}></MusicOn>}
      {!isMusic && <MusicOff value={size} css={MusicCss}></MusicOff>}
      {isMusic && <audio src='/배경음악.mp3' autoPlay={true} loop></audio>}
    </button>
  )
}
