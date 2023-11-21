export const playVideoMirror = (videoRef: React.RefObject<HTMLVideoElement>, video_time: number) => {
  if (videoRef.current && video_time != 0 && video_time < 1.873) {
    videoRef.current.currentTime = videoRef.current.duration - video_time;
  }
  videoRef.current?.play();
};
