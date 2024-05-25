import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, IVideo } from "../types/Interface";
import Url from "../api/Url";
import { Link } from "react-router-dom";
import { video_action } from "../store/VideoSlice";

export const VideoList = () => {
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
          setVideos(videos);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [videoName]);
  return (
    <div>
      {videos.map((video) => {
        return (
          <div
            className="p-6"
            key={video.id.videoId}
            onClick={() => dispatch(video_action.setVideo(video))}
          >
            <Link to={`/video/${video.id.videoId}`}>
              <div className="flex justify-center items-center">
                <img src={video.snippet.thumbnails.medium.url} alt="" />
              </div>
              <div>
                <p className="text-sm p-2">{video.snippet.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
