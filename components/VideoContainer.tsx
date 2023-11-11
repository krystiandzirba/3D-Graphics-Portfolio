function VideoContainer() {
  return (
    <div className="video_container">
      <video muted preload="auto">
        <source src="../src/assets/video_forward.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoContainer;
