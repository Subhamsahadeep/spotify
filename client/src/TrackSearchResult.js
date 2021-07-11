import React from "react"

export default function TrackSearchResult({ track,chooseTrack }) {
  function handlePlay() {
     chooseTrack(track)
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img alt="tracks" src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3 px-3">
        <div className="uppercase font-size-smd bold color-white">{track.title}</div>
        <div className="uppercase font-size-sm text-muted ">{track.artist}</div>
      </div>
    </div>
  )
}