import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import {
  MdHistory,
  MdHomeFilled,
  MdOutlineFeedback,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineSlowMotionVideo,
  MdOutlineSmartDisplay,
  MdOutlineSportsVolleyball,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSettings,
  MdSubscriptions,
  MdThumbUpOffAlt,
} from "react-icons/md";
import { TbDeviceGamepad2, TbMusic } from "react-icons/tb";

export const mainLinks = [
  {
    icon: <MdHomeFilled className="text-xl" />,
    name: "Home",
  },
  {
    icon: <FaRegCompass className="text-xl" />,
    name: "Explore",
  },
  {
    icon: <MdOutlineSlowMotionVideo className="text-xl" />,
    name: "Shorts",
  },
  {
    icon: <MdSubscriptions className="text-xl" />,
    name: "Subscriptions",
  },
];

export const secondaryLinks = [
  {
    icon: <MdOutlineVideoLibrary className="text-xl" />,
    name: "Library",
  },
  {
    icon: <MdHistory className="text-xl" />,
    name: "History",
  },
  {
    icon: <MdOutlineSmartDisplay className="text-xl" />,
    name: "Your Videos",
  },
  {
    icon: <MdOutlineWatchLater className="text-xl" />,
    name: "Watch Later",
  },
  {
    icon: <MdThumbUpOffAlt className="text-xl" />,
    name: "Liked Videos",
  },
];

export const subscriptionLinks = [
  {
    icon: <TbMusic className="text-xl" />,
    name: "Music",
  },
  {
    icon: <MdOutlineSportsVolleyball className="text-xl" />,
    name: "Sport",
  },
  {
    icon: <TbDeviceGamepad2 className="text-xl" />,
    name: "Gaming",
  },
  {
    icon: <GiFilmStrip className="text-xl" />,
    name: "Films",
  },
];

export const helpLinks = [
  {
    icon: <MdSettings className="text-xl" />,
    name: "Settings",
  },
  {
    icon: <MdOutlineFlag className="text-xl" />,
    name: "Report History",
  },
  {
    icon: <MdOutlineHelpOutline className="text-xl" />,
    name: "Help",
  },
  {
    icon: <MdOutlineFeedback className="text-xl" />,
    name: "Send Feedback",
  },
];

export const textLinks = [
  [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creator",
    "Advertise",
    "Developers",
  ],
  [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How Youtube works",
    "Test new features",
  ],
];
