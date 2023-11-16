import React, { useRef, useState } from "react";
import video_forward from "../../../src/assets/video_forward.mp4";
import video_reverse from "../../../src/assets/video_reverse.mp4";
import video_zoom from "../../../src/assets/video_zoom.mp4";

export default function VideoContainersStack() {
  const video_forward_ref = useRef<HTMLVideoElement>(null);
  const video_reverse_ref = useRef<HTMLVideoElement>(null);
  const video_zoom_ref = useRef<HTMLVideoElement>(null);

  const [portfolio_button_state, set_portfolio_button_state] = useState(false);
  const [animation_state, set_animation_state] = useState(false);
  const [video_forward_time, set_video_forward_time] = useState(false);

  const [button_text, set_button_text] = useState("Portfolio");

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

  function onClickAnimation(video: React.RefObject<HTMLVideoElement>) {
    if (video.current && video_forward_time && !animation_state) {
      const currentTime = video.current.currentTime;
      if (currentTime === video.current.duration) {
        set_animation_state(true);
        playVideo(video_zoom_ref);
        IndexPriority();
        PortfolioButtonFadeOut();
        PageFadeOut();
      }
    }

    return 0;
  }

  return (
    <>
      <div className="page_fade_in"></div>
      <button
        onClick={() => {
          set_portfolio_button_state(true);
          setInterval(() => {
            onClickAnimation(video_forward_ref);
          }, 100);
        }}
        onMouseEnter={() => {
          set_video_forward_time(true);
          if (!portfolio_button_state) {
            IndexChange(true);
            playVideo(video_forward_ref);
            pauseVideo(video_reverse_ref);
            set_button_text("Explore");
          }
        }}
        onMouseLeave={() => {
          if (!portfolio_button_state) {
            IndexChange(false);
            playVideo(video_reverse_ref);
            pauseVideo(video_forward_ref);
            set_button_text("Portfolio");
          }
        }}
        className="portfolio_button"
        id="portfolio_button"
      >
        {button_text}
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

function IndexPriority() {
  const video_forward = document.getElementById("video_forward");
  const video_reverse = document.getElementById("video_reverse");
  const video_zoom = document.getElementById("video_zoom");

  if (video_forward !== null && video_reverse !== null && video_zoom !== null) {
    video_forward.style.zIndex = "1";
    video_reverse.style.zIndex = "1";
    video_zoom.style.zIndex = "3";
  }
}

function PortfolioButtonFadeOut() {
  const portfolio_button = document.querySelector(".portfolio_button");
  if (portfolio_button !== null) {
    portfolio_button.classList.add("button_fade_out");
  }
}

function PageFadeOut() {
  setTimeout(function () {
    const page_fade_out = document.querySelector(".page_fade_in");
    if (page_fade_out !== null) {
      page_fade_out.classList.add("page_fade_out");
    }
  }, 1700);
}
