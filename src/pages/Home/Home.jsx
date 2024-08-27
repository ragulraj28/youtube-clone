import React, { useEffect, useState } from "react";
import "./home.scss";
import { CategoryItems } from "../../data";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import Video from "../../components/Video/Video";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoryNav from "../../components/CategoryNav/CategoryNav";

const Home = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const q = query(collection(db, "videos"));
    onSnapshot(q, (snapShot) => {
      setVideos(
        snapShot.docs?.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="home">
      <Sidebar />

      <CategoryNav CategoryItems={CategoryItems} activeItem="All" />

      <div className="video-container">
        {videos?.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <Video video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
