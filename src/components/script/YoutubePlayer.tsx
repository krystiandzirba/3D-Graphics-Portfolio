interface YoutubePlayerProps {
  embedId: string;
}

export const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="400"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
