import { useEffect, useState } from "react"
// import IndexPage from "./player";
import Head from "next/head"
// import { player } from 'lodash'

const widthContainer = 1310
const heightContainer = 653

export default function Home() {
  // const getPlayer = async () => {
  //   // const GcorePlayer = (await import("../player/player")).default;
  //   console.log(window.GcorePlayer.gplayerAPI)
  //   let gplayerAPI = new window.GcorePlayer.gplayerAPI(document.getElementById("gplayer"))
  //   gplayerAPI.on("ready", () => {
  //     console.log("[Event]", "ready")
  //     gplayerAPI.method({ name: "play" })
  //   })
  // }

  const getPlayer = () => {
    const gplayerAPI = new window.GcorePlayer.gplayerAPI(document.getElementById("gplayer"))
    setPlayer(gplayerAPI)
  }

  const [player, setPlayer] = useState(null)
  const [playIconVis, setPlayIconVis] = useState(true)

  const testWindow = async () => {
    console.log(window.GcorePlayer.gplayerAPI)
  }

  useEffect(() => {
    console.log(window.GcorePlayer)
    // console.log(player)
    // let ind = IndexPage
    // getPlayer()
    // testWindow()
  }, [])

  // useEffect(() => {
  //   player.on("play", () => {
  //     console.log("1111")
  //     setPlayIconVis(false)
  //   })
  // }, [player])

  const play = () => {
    const gplayerAPI = new window.GcorePlayer.gplayerAPI(document.getElementById("gplayer"))
    gplayerAPI.on("ready", () => {
      gplayerAPI.method({
        name: "play",
        params: {},
        callback: (res) => {
          setPlayIconVis(false)
        },
      })
    })
  }

  return (
    <div>
      <Head>
        <script async src="https://vplatform.gcdn.co/_players/v2.0.71/gplayerAPI.js"></script>
      </Head>
      <div style={{ width: widthContainer, height: heightContainer }}>
        <iframe
          src={`https://chillvision.gcdn.co/videos/18824_kyFF9u8UPlC1XKs?player_id=777`}
          allow="autoplay"
          width="100%"
          height="100%"
          allowFullScreen
          frameBorder="0"
          id="gplayer"
          // onClick = {() => play()}
        ></iframe>
        <img
          src="/img/PlayIcon.png"
          alt="text"
          style={{
            position: "absolute",
            left: `${widthContainer / 2 - 50}px`,
            top: `${heightContainer / 2 - 50}px`,
            pointerEvents: "none",
            visibility: playIconVis == true ? "visible" : "hidden",
          }}
        />
      </div>
    </div>
    // <div>

    // </div>
  )
}
