import { useDispatch, useSelector } from "react-redux";
import Url from "../api/Url";
import { useEffect, useState } from "react";
import { IAppState, IVideo } from "../types/Interface";
import { video_action } from "../store/VideoSlice";
import { Link } from "react-router-dom";

export const Main = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const videoName = useSelector((state: IAppState) => state.video.videoName);
  const dispatch = useDispatch();
  useEffect(() => {
    videoName &&
      Url.get("search", {
        params: {
          part: "snippet",
          maxResult: 5,
          key: "AIzaSyB4S2I6cjODUKph05naKm5VG2dy-Ndf5Mg",
          q: videoName,
        },
      })
        .then((res) => {
          const videos = res.data.items;
          console.log(videos);
          setVideos(videos);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [videoName]);

  return videos.length > 0 ? (
    <div className="grid grid-cols-2 w-full overflow-auto pb-4">
      {videos.map((video: IVideo) => {
        return (
          <>
            <div className="px-10 mt-4 " key={video.id.videoId}>
              <Link to={`/video/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt=""
                  className="rounded-lg"
                  onClick={() => dispatch(video_action.setVideo(video))}
                />
              </Link>
            </div>
            <div className="mt-4 pt-8 px-2">
              <Link to={`/video/${video.id.videoId}`}>
                <p
                  className="text-xl"
                  onClick={() => dispatch(video_action.setVideo(video))}
                >
                  {video.snippet.title}
                </p>
              </Link>
              <p className="text-gray-200">{video.snippet.channelTitle}</p>
              <p className="text-gray-400">{video.snippet.description}</p>
            </div>
          </>
        );
      })}
    </div>
  ) : (
    <p className="p-8 mx-auto">No Result</p>
  );
};
