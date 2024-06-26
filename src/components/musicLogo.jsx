import React from "react";

function MusicLogo() {
  return (
    <React.Fragment>
      <div id="logoSection" style={{minHeight:"65vh"}}>
        <div className="logobox">
          <h1>Music.com</h1>
          <h3>Discover new music every day.</h3>
          <p>
            Get playlists and albums inspired by the artists and genres you're
            listening to.
          </p>
          <button>Try It Free</button>
        </div>
        <div id="c-pos">
          <div className="c-circle circle1"></div>
          <div className="c-circle circle2"></div>
          <div className="c-circle circle3"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MusicLogo;
