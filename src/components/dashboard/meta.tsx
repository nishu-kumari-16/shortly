import LikedSongs from "../../assets/icons/liked-songs.svg";
import Neffex from "../../assets/icons/nefflex-playlist.svg";
import KDASongs from "../../assets/icons/k-da.svg";
import LikedSongs2 from "../../assets/icons/liked-songs-2.svg";
import DanceSongs from "../../assets/icons/dance.svg";

const Card = ({ image, text }: any) => (
  <div className="flex bg-[#303030] rounded-sm items-center gap-5">
    <img src={image} alt={text} className="sm:w-auto w-[3rem]" />
    <div className="text-white font-semibold overflow-hidden mr-2 break-words text-sm sm:text-[1rem]">
      {text}
    </div>
  </div>
);

export const topGridItems = [
  <Card text="Liked Songs" image={LikedSongs} />,
  <Card text="Neffex Playlist" image={Neffex} />,
  <Card text="K/DA" image={KDASongs} />,
  <Card text="Liked Songs" image={LikedSongs2} />,
  <Card text="Dance/Electronic Mix" image={DanceSongs} />,
];
