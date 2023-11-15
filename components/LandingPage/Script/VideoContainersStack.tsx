import React, { useRef } from "react";
import video_forward from "../../../src/assets/video_forward.mp4";
import video_reverse from "../../../src/assets/video_reverse.mp4";
import video_zoom from "../../../src/assets/video_zoom.mp4";

export default function VideoContainersStack() {
  const video_forward_ref = useRef<HTMLVideoElement>(null);
  const video_reverse_ref = useRef<HTMLVideoElement>(null);
  const video_zoom_ref = useRef<HTMLVideoElement>(null);

  const playVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    IndexChange(true);
    playVideo(videoRef);
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    IndexChange(false);
    playVideo(videoRef);
  };

  return (
    <>
      <div className="page_fade_in"></div>
      <button
        onClick={() => console.log("click")}
        onMouseEnter={() => {
          handleMouseEnter(video_forward_ref);
          pauseVideo(video_reverse_ref);
        }}
        onMouseLeave={() => {
          handleMouseLeave(video_reverse_ref);
          pauseVideo(video_forward_ref);
        }}
        className="portfolio_button"
      >
        Portfolio
      </button>

      <div className="video_containers_stack">
        <video muted preload="auto" ref={video_forward_ref} id="video_forward">
          <source src={video_forward} type="video/mp4" />
        </video>
        <video muted preload="auto" ref={video_reverse_ref} id="video_reverse">
          <source src={video_reverse} type="video/mp4" />
        </video>
        <video muted preload="auto" ref={video_zoom_ref} id="video_zoom">
          <source src={video_zoom} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

function IndexChange(mouse_state: boolean) {
  const video_forward = document.getElementById("video_forward");
  const video_reverse = document.getElementById("video_reverse");

  if (mouse_state) {
    if (video_forward !== null && video_reverse !== null) {
      video_forward.style.zIndex = "4";
      video_reverse.style.zIndex = "1";
    }
  }

  if (!mouse_state) {
    if (video_forward !== null && video_reverse !== null) {
      video_reverse.style.zIndex = "4";
      video_forward.style.zIndex = "1";
    }
  }
}
