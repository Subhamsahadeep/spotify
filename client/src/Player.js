import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      styles={{
        activeColor: '#fff',
        bgColor: '#003042',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        sliderHandleColor: '#fff',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}