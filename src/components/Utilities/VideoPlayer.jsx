"use client"
import { X } from "@phosphor-icons/react/dist/ssr"
import Youtube from "react-youtube"
import { useState } from "react"


const VideoPlayer = ({ youtubeID }) => {
    
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handleVideoPlayer}
                className="rounded text-color-putih float-right bg-color-secondary px-4 mb-1">
                 X
                </button>
                <Youtube videoId={youtubeID} onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Video Eror, Please Try Another...")}
                />
            </div>
        )
    }

const ButtonOpenPlayer = () => {
    return (
        <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 bg-color-secondary text-color-putih text-xl shadow-xl transition-all">Tonton Trailer</button>
    )
}

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
}

export default VideoPlayer