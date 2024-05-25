import { IAppState } from "../types/Interface";
import { useSelector } from "react-redux";

export const SingleVideo = () => {
  const videoId = useSelector(
    (state: IAppState) => state.video.video.id.videoId
  );
  const { title, channelTitle, description } = useSelector(
    (state: IAppState) => state.video.video.snippet
  );

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <iframe
          frameBorder="0"
          allowFullScreen
          title="VideoPlayer"
          src={videoSrc}
          width="100%"
          height="420px"
        />
      </div>
      <div className="p-2">
        <p className="text-2xl">{title}</p>
        <p className="text-lg text-gray-200">{channelTitle}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};
