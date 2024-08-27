import React, { useEffect } from "react";
import "./header.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/youtube.png";
import { MdMic } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.user);

  const handleSignin = async () => {
    const response = await signInWithPopup(auth, provider);
    dispatch(setUser(response.user));
  };

  const handleSignout = async () => {
    dispatch(logout());
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <header>
      <div className="left">
        <div className="menu-icon">
          <AiOutlineMenu size={24} className="text-yt-white" />
        </div>
        <div className="logo">
          <img src={Logo} alt="yt-logo" />
        </div>
      </div>
      <div className="middle">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <CiSearch size={24} className="text-yt-white" />
        </div>
        <div className="mic-icon">
          <MdMic size={24} className="text-yt-white" />
        </div>
      </div>
      <div className="right">
        <RiVideoAddLine size={24} className="text-yt-white" />
        <BsBell size={24} className="text-yt-white" />
        {!user ? (
          <button className="user-login" onClick={handleSignin}>
            Sign In
          </button>
        ) : (
          <img
            className="user-profile"
            src={user?.photoURL}
            alt={user?.displayName}
            onClick={handleSignout}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
