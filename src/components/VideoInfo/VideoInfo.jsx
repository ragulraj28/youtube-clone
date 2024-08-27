import React, { useEffect, useState } from "react";
import "./video-info.scss";
import { Link, useParams } from "react-router-dom";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import CategoryNav from "../CategoryNav/CategoryNav";
import { CategoryItems } from "../../data";
import Video from "../Video/Video";

const VideoInfo = () => {
  const [videos, setVideos] = useState([]);
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const q = query(doc(db, "videos", id));
      onSnapshot(q, (snapshot) => {
        setData(snapshot.data());
      });
    }
  }, [id]);

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
    <div className="video-page">
      <div className="left">
        <div className="iframe-container">
          <iframe
            src={`https://www.youtube.com/embed/${data?.link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="video-info">
          <h1 className="video-title">{data?.title}</h1>
          <div className="video-details">
            <div className="channel-info">
              <img src={data?.logo} alt={data?.channel} className="logo" />
              <div>
                <h3 className="channel-name">{data?.channel}</h3>
                <p>{data?.subscriber} Subscribers</p>
              </div>
              <button className="subscribe">Subscribe</button>
            </div>
            <div className="video-details-right">
              <div className="cta">
                {true ? <AiFillLike size={24} /> : <AiOutlineLike size={24} />}
                2K
                <span className="line" />
                {false ? (
                  <AiFillDislike size={24} />
                ) : (
                  <AiOutlineDislike size={24} />
                )}
              </div>
              <div className="cta">
                <PiShareFatLight size={24} />
                Share
              </div>
              <div className="cta">
                <LiaDownloadSolid size={24} />
                Download
              </div>
            </div>
          </div>
          <div className="description">
            <p>
              {data?.views} views <span />
              {data?.uploadTime}
            </p>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>

      <div className="right">
        <CategoryNav CategoryItems={CategoryItems} activeItem="All" />

        {videos?.map(
          (video) =>
            video.id !== id && (
              <Link key={video.id} to={`/video/${video.id}`}>
                <Video video={video} layout={"col"} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default VideoInfo;
