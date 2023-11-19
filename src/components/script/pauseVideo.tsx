export const pauseVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef.current) {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }
};
