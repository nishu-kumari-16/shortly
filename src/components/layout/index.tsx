import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Sidebar from "../sidebar";
import { sidebarElements } from "../sidebar/meta";
import Dashboard from "../dashboard";

const audioLists = [
  {
    name: "Despacito",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
  },
  {
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc:
      "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
  },
  {
    name: "Shape of You",
    singer: "Ed Sheeran",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1502689731/Shape_of_You_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1502689683/Ed_Sheeran_Shape_of_You.mp3",
  },
  {
    name: "Billie Jean",
    singer: "Michael Jackson",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1573758778/Billie_Jean_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1573550770/Michael_Jackson_Billie_Jean.mp3",
  },
  {
    name: "Bohemian Rhapsody",
    singer: "Queen",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1609456322/Bohemian_Rhapsody_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1609456319/Queen_Bohemian_Rhapsody.mp3",
  },
  {
    name: "Stairway to Heaven",
    singer: "Led Zeppelin",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1654321789/Stairway_to_Heaven_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1654321788/Led_Zeppelin_Stairway_to_Heaven.mp3",
  },
  {
    name: "Imagine",
    singer: "John Lennon",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1701102534/Imagine_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1701102533/John_Lennon_Imagine.mp3",
  },
  {
    name: "Thriller",
    singer: "Michael Jackson",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1757894356/Thriller_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1757894355/Michael_Jackson_Thriller.mp3",
  },
  {
    name: "Wonderwall",
    singer: "Oasis",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1804565120/Wonderwall_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1804565119/Oasis_Wonderwall.mp3",
  },
  {
    name: "Hotel California",
    singer: "Eagles",
    cover:
      "https://res.cloudinary.com/your-image-upload-service/image/upload/v1851235882/Hotel_California_cover.jpg",
    musicSrc:
      "https://res.cloudinary.com/your-audio-upload-service/video/upload/v1851235881/Eagles_Hotel_California.mp3",
  },
];

const Layout = () => {
  return (
    <div className="flex h-[calc(100%-80px)]">
      <Sidebar menuItems={sidebarElements} />
      <Dashboard />
      <ReactJkMusicPlayer
        theme="dark"
        audioLists={audioLists}
        showMediaSession
        autoPlay={false}
        mode="full"
        showDownload={false}
        showThemeSwitch={false}
        showReload={false}
        responsive={false}
        toggleMode={false}
      />
    </div>
  );
};

export default Layout;
