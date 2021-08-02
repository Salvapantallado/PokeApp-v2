import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading">Loading...</div>
      <img
        className="loading-gif"
        src="https://24.media.tumblr.com/84238217d8fe579d2bb679feefb58cbb/tumblr_mote56FsYk1rg3fuxo1_400.gif"
        alt="sprite"
      ></img>
    </div>
  );
}
