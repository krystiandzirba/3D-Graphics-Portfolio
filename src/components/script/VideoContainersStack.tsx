import React, { useRef, useState, useEffect } from "react";
import video_forward from "../../../src/assets/video_forward.mp4";
import video_reverse from "../../../src/assets/video_reverse.mp4";
import video_zoom from "../../../src/assets/video_zoom.mp4";

import { playVideo } from "./playVideo";
import { pauseVideo } from "./pauseVideo";

export default function VideoContainersStack() {
  const video_forward_ref = useRef<HTMLVideoElement>(null);
  const video_reverse_ref = useRef<HTMLVideoElement>(null);
  const video_zoom_ref = useRef<HTMLVideoElement>(null);

  const [portfolio_button_cover_state, set_portfolio_button_cover_state] = useState(true);
  const [portfolio_button_state, set_portfolio_button_state] = useState(false);
  const [animation_state, set_animation_state] = useState(false);
  const [video_forward_time, set_video_forward_time] = useState(false);
  const [button_text, set_button_text] = useState("Portfolio");
  const [remove_loading_page_content, set_remove_loading_page_content] = useState(false);
  const [video_index, set_video_index] = useState({ forward: 30, reverse: 20, zoom: 10 });
  const [load_portfolio_content, set_load_portfolio_content] = useState(false);

  useEffect(() => {
    const portfolio_button_cover_timeout = setTimeout(() => {
      set_portfolio_button_cover_state(false);
    }, 1500);

    return () => clearTimeout(portfolio_button_cover_timeout);
  }, []);

  const onClickAnimation = (video: React.RefObject<HTMLVideoElement>) => {
    const checkAnimation = () => {
      if (video.current && video_forward_time && !animation_state) {
        const currentTime = video.current.currentTime;
        if (currentTime === video.current.duration) {
          set_animation_state(true);
          playVideo(video_zoom_ref);
          set_video_index({ forward: 10, reverse: 10, zoom: 30 });
          setTimeout(() => {
            set_remove_loading_page_content(true);
          }, 2300);
          setTimeout(() => {
            set_load_portfolio_content(true);
            console.log("create");
          }, 2500);
        } else {
          requestAnimationFrame(checkAnimation);
        }
      }
    };

    checkAnimation();
  };

  return (
    <>
      {!load_portfolio_content && <div className="page_fade_black"></div>}
      <div className={!animation_state ? "white_fade_dummy" : "page_fade_white"}></div>
      {portfolio_button_cover_state && <div className="portfolio_button_cover"></div>}
      {!remove_loading_page_content && (
        <button
          onClick={() => {
            set_portfolio_button_state(true);
            onClickAnimation(video_forward_ref);
          }}
          onMouseEnter={() => {
            set_video_forward_time(true);
            if (!portfolio_button_state) {
              set_video_index({ forward: 40, reverse: 10, zoom: 30 });
              playVideo(video_forward_ref);
              pauseVideo(video_reverse_ref);
              set_button_text("Explore");
            }
          }}
          onMouseLeave={() => {
            if (!portfolio_button_state) {
              set_video_index({ forward: 10, reverse: 40, zoom: 30 });
              playVideo(video_reverse_ref);
              pauseVideo(video_forward_ref);
              set_button_text("Portfolio");
            }
          }}
          className={!animation_state ? "portfolio_button" : "button_fade_out"}
          id="portfolio_button"
        >
          {button_text}
        </button>
      )}

      {!remove_loading_page_content && (
        <div className="video_containers_stack">
          {/* prettier-ignore  */}
          <video muted preload="auto" ref={video_forward_ref} id="video_forward" style={{ zIndex: video_index.forward }}>
            <source src={video_forward} type="video/mp4" />
          </video>
          {/* prettier-ignore  */}
          <video muted preload="auto" ref={video_reverse_ref} id="video_reverse" style={{ zIndex: video_index.reverse }}>
            <source src={video_reverse} type="video/mp4" />
          </video>
          {/* prettier-ignore  */}
          <video muted preload="auto" ref={video_zoom_ref} id="video_zoom" style={{ zIndex: video_index.zoom }}>
            <source src={video_zoom} type="video/mp4" />
          </video>
        </div>
      )}

      {load_portfolio_content && <div className="portfolio_background"></div>}
      {load_portfolio_content && <div className="test"></div>}
    </>
  );
}
