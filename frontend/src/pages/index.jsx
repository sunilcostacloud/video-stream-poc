import VideoPlayer from '@/components/VideoPlayer'
import { useRef } from 'react'

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/5a58c8b6-d158-4f2f-98c4-4c8c5b8a6cab/index.m3u8" // 

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
    </>
  )
}

export default App