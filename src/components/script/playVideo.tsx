export const playVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef.current) {
    videoRef.current.play();
  }
};
