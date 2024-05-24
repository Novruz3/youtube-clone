import { useSelector } from "react-redux";
import Url from "../api/Url";
import { useEffect, useState } from "react";

interface IVideo {
  id: {
    videoId: string
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    channelTitle: string;
    description: string;
  };
}
interface IAppState {
  video: {
    videoName: string;
  };
}

export const Main = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const videoName = useSelector((state: IAppState) => state.video.videoName);
  useEffect(() => {
    videoName &&
      Url.get("search", {
        params: {
          part: "snippet",
          maxResult: 10,
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

  return videos.length>0 ? (
    <div className="grid grid-cols-2 w-full overflow-auto pb-4">
      {videos.map((video: IVideo) => {
        return (
          <>
            <div className="px-10 mt-4 ">
              <img src={video.snippet.thumbnails.high.url} alt="" className="rounded-lg" />
            </div>
            <div className="mt-4 pt-8 px-2">
              <p className="text-xl">{video.snippet.title}</p>
              <p className="text-gray-200">{video.snippet.channelTitle}</p>
              <p className="text-gray-400">{ video.snippet.description}</p>
            </div>
          </>
        );
      })}
    </div>
  ) : (
    <p className="p-8 mx-auto">No Result</p>
  );
};
