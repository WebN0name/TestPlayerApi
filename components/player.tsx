import React, { useEffect } from "react"
// import player from 'npm_player';

export default function Player() {
    const series = [
        "18824_kyFF9u8UPlC1XKs",
        "18824_iW5v2SQ5YnKYSgl" 
    ]

    useEffect(function mount() {
        let gplayerAPI = new GcorePlayer.gplayerAPI(document.getElementById('gplayer'));

        gplayerAPI.on('ready', () => {
            console.log('[Event]', 'ready')
            gplayerAPI.method({name: 'play'})
        })
    })

    return (
        <div className="">
            <iframe 
                width="640" 
                height="360" 
                src={`https://chillvision.gcdn.co/videos/${series[0]}?player_id=777`} 
                allow='autoplay' 
                allowFullScreen 
                frameBorder="0" 
                id='gplayer'>
            </iframe>
        </div>
    )
}
