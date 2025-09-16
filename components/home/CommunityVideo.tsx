'use client'
import React, { useRef, useState } from 'react'
import SectionHeader from '../shared/SectionHeader'

const CommunityVideo = () => {

  const videoRef = useRef<any | null>(null); // Reference to the video element
  const [isMuted, setIsMuted] = useState<boolean>(true); // Mute state

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Toggle the muted property
      setIsMuted(!isMuted); // Update state
    }
  };
   
  return (
    <div>
      <div className="container">
        <div className=''>
          <SectionHeader 
            title='A Community Without Compromise'
            subtitle='A community without compromise, Bay Ghantoot is a stunning beachside development nestled between Abu Dhabi and Dubai, in the heart of Ghantoot. This exclusive enclave features Gemini villas and townhouses walking distance from the beach, offering a flexible payment plan for an unparalleled living experience.'
          />
          {/* Use an iframe to embed a YouTube video instead of the video tag */}
          <iframe
            width="1208"
            height="653"
            src="https://www.youtube.com/embed/zumJJUL_ruM?autoplay=1&mute=1&loop=1&playlist=zumJJUL_ruM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[1208px] mx-auto bg-accent rounded-[6px] aspect-[1.85] mt-[30px] object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default CommunityVideo