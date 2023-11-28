import React, { useRef, useState, useEffect } from "react";
import video_forward from "@/assets/video/video_forward.mp4";
import video_reverse from "@/assets/video/video_reverse.mp4";
import video_zoom from "@/assets/video/video_zoom.mp4";
import background_animation from "@/assets/video/background_animation.mp4";

import door_closing_1 from "@/assets/audio/door_closing_1.mp3";
import door_closing_2 from "@/assets/audio/door_closing_2.mp3";
import door_opening_1 from "@/assets/audio/door_opening_1.mp3";
import door_opening_2 from "@/assets/audio/door_opening_2.mp3";
import door_squeaking_1 from "@/assets/audio/door_squeaking_1.mp3";
import door_squeaking_2 from "@/assets/audio/door_squeaking_2.mp3";
import door_squeaking_3 from "@/assets/audio/door_squeaking_3.mp3";
import door_squeaking_4 from "@/assets/audio/door_squeaking_4.mp3";

import { playVideoZoom } from "./playVideoZoom";
import { playVideoMirror } from "./playVideoMirror";

import { YoutubePlayer } from "./YoutubePlayer";

import { playAudio } from "./AudioPlayer";

export default function VideoContainersStack() {
  const video_forward_ref = useRef<HTMLVideoElement>(null);
  const video_reverse_ref = useRef<HTMLVideoElement>(null);
  const video_zoom_ref = useRef<HTMLVideoElement>(null);

  const [portfolio_button_cover_state, set_portfolio_button_cover_state] = useState<boolean>(true);
  const [portfolio_button_state, set_portfolio_button_state] = useState<boolean>(false);
  const [animation_state, set_animation_state] = useState<boolean>(false);
  const [video_forward_state, set_video_forward_state] = useState<boolean>(false);
  const [button_text, set_button_text] = useState<string>("Portfolio");
  const [remove_loading_page_content, set_remove_loading_page_content] = useState<boolean>(false);
  const [video_index, set_video_index] = useState({ forward: 30, reverse: 20, zoom: 10 });
  const [video_opacity, set_video_opacity] = useState({ forward: 1, reverse: 1 });
  const [load_portfolio_content, set_load_portfolio_content] = useState<boolean>(false);
  const [video_forward_time, set_video_forward_time] = useState<number>(0);
  const [video_reverse_time, set_video_reverse_time] = useState<number>(0);
  const [video_reverse_loaded, set_video_reverse_loaded] = useState<boolean>(false);
  const [continue_button_state, set_continue_button_state] = useState<boolean>(false);

  useEffect(() => {
    const handleLoadedData = () => {
      console.log("Video loaded");
      set_video_reverse_loaded(true);
    };

    const videoElement = video_reverse_ref.current;

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);

      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, []);

  const onClickAnimation = (video: React.RefObject<HTMLVideoElement>) => {
    const checkAnimation = () => {
      if (video.current && video_forward_state && !animation_state) {
        const currentTime = video.current.currentTime;
        if (currentTime === video.current.duration) {
          set_animation_state(true);
          playVideoZoom(video_zoom_ref);
          set_video_index({ forward: 10, reverse: 10, zoom: 30 });
          setTimeout(() => {
            set_remove_loading_page_content(true);
          }, 2300);
          setTimeout(() => {
            set_load_portfolio_content(true);
          }, 2500);
        } else {
          requestAnimationFrame(checkAnimation);
        }
      }
    };

    checkAnimation();
  };

  useEffect(() => {
    if (!video_reverse_ref.current) return;
    console.log("video_reverse_time changed:", video_reverse_time);

    if (video_reverse_time > 0.4 && video_reverse_time < 0.7) {
      playAudio(door_squeaking_2);
    }

    if (video_reverse_time > 1.4 && video_reverse_time < 1.8) {
      playAudio(door_closing_1);
      setTimeout(() => {
        playAudio(door_closing_2);
      }, 150);
    }
  }, [video_reverse_time, video_reverse_ref.current]);

  useEffect(() => {
    if (!video_forward_ref.current) return;
    // console.log("video_forward_time changed:", video_forward_time);
    if (video_forward_time > 0.01 && video_forward_time < 0.3) {
      playAudio(door_opening_1);
      playAudio(door_opening_2);

      setTimeout(() => {
        playAudio(door_squeaking_3);
      }, 100);

      setTimeout(() => {
        playAudio(door_squeaking_1);
      }, 350);
    }

    if (video_forward_time > 0.6 && video_forward_time < 0.7) {
      playAudio(door_squeaking_4);
    }
  }, [video_forward_time, video_forward_ref.current]);

  const videoForwardTime = () => {
    set_video_forward_time(0);
    if (video_forward_ref.current) {
      const currentTime = video_forward_ref.current.currentTime;
      if (currentTime > 0 && currentTime < 1.877333) {
        set_video_forward_time(currentTime);
      }
    }
  };

  const videoReverseTime = () => {
    set_video_reverse_time(0);
    if (video_reverse_ref.current) {
      const currentTime = video_reverse_ref.current.currentTime;
      if (currentTime > 0 && currentTime < 1.877333) {
        set_video_reverse_time(currentTime);
      }
    }
  };

  return (
    <>
      {
        <div className={continue_button_state ? "page_fade_black" : "page_black"}>
          {video_reverse_loaded && (
            <button
              className="continue_button"
              onClick={() => {
                set_continue_button_state(true);

                setTimeout(() => {
                  set_portfolio_button_cover_state(false);
                }, 2000);
              }}
            >
              click to continue
            </button>
          )}
        </div>
      }
      {!video_reverse_loaded && <div className="loading_text">Loading...</div>}

      <div className="app_version">v0.22.0 work in progress</div>
      <div className={!animation_state ? "white_fade_dummy" : "page_fade_white"}></div>
      {portfolio_button_cover_state && <div className="portfolio_button_cover"></div>}
      {!remove_loading_page_content && (
        <button
          onClick={() => {
            set_portfolio_button_state(true);
            onClickAnimation(video_forward_ref);
          }}
          onMouseEnter={() => {
            set_video_forward_state(true);
            if (!portfolio_button_state) {
              video_forward_ref.current?.addEventListener("timeupdate", videoForwardTime);
              video_reverse_ref.current?.addEventListener("timeupdate", videoReverseTime);
              set_video_opacity({ forward: 1, reverse: 0 });
              set_video_index({ forward: 40, reverse: 10, zoom: 30 });
              playVideoMirror(video_forward_ref, video_reverse_time);

              set_button_text("Explore");
            }
          }}
          onMouseLeave={() => {
            if (!portfolio_button_state) {
              video_forward_ref.current?.addEventListener("timeupdate", videoForwardTime);
              video_reverse_ref.current?.addEventListener("timeupdate", videoReverseTime);
              set_video_opacity({ forward: 0, reverse: 1 });
              set_video_index({ forward: 10, reverse: 40, zoom: 30 });
              playVideoMirror(video_reverse_ref, video_forward_time);

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
          <video muted preload="auto" ref={video_forward_ref} id="video_forward" style={{ zIndex: video_index.forward, opacity: video_opacity.forward }}>
            <source src={video_forward} type="video/mp4" />
          </video>
          {/* prettier-ignore  */}
          <video muted preload="auto" ref={video_reverse_ref} id="video_reverse" style={{ zIndex: video_index.reverse, opacity: video_opacity.reverse }}>
            <source src={video_reverse} type="video/mp4" />
          </video>
          {/* prettier-ignore  */}
          <video muted preload="auto" ref={video_zoom_ref} id="video_zoom" style={{ zIndex: video_index.zoom }}>
            <source src={video_zoom} type="video/mp4" />
          </video>
        </div>
      )}

      {load_portfolio_content && (
        <div className="portfolio_container">
          <div className="portfolio_background_animation">
            <video autoPlay muted loop preload="auto" id="background_animation">
              <source src={background_animation} type="video/mp4" />
            </video>
            <div className="background_animation_gradient"></div>
          </div>
          <div className="section_line"></div>
          <span className="section_title">3D animations</span>
          <span className="animation_title animation_a">Memory Foam I</span>
          <div className="youtube_player_container">
            <YoutubePlayer embedId="RPdqY2Rh3vI" />
          </div>
          <span className="animation_title animation_b">Memory Foam II</span>
          <span className="empty_animation_container">Coming in 2025</span>
        </div>
      )}
    </>
  );
}
