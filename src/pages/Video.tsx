import { VideoList } from "../components/VideoList";
import { SingleVideo } from "../components/SingleVideo";

export const Video = () => {
  return (
    <>
      <div className="grid grid-cols-6 w-full mt-4 overflow-auto">
        <div className="col-span-4">
          <SingleVideo />
        </div>
        <div className="col-span-2">
          <VideoList />
        </div>
      </div>
    </>
  );
};
