export const playVideoZoom = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef.current) {
    videoRef.current.play();
  }
};
