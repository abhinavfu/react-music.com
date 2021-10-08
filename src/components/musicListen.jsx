import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pandaImg from "./panda.svg";
function MusicListen() {
  const [s0, setS0] = useState([]);
  const [current, setCurrent] = useState(0);
  const [songimg, setSongimg] = useState(pandaImg);
  let slides = s0;
  let URLValue = window.location.href;
  let textID = `${URLValue}`;
  const words = textID.split("/");

  let textName = words[6];
  const words2 = textName.split("%20");
  let artistName = words2.filter((elm) => {
    return elm !== "";
  });
  artistName = artistName.join(" ");

  // ===== Set artist Id =====
  let songId = words[5];
  function cleanId() {
    if (songId === ":id") {
      songId = 55903;
      artistName = "Zara Larsson";
      return songId & artistName;
    } else {
      return songId;
    }
  }
  cleanId();
  // ===== Set selection no. =====
  const [perPage, setPerPage] = useState(10);
  const [sNum, setsNum] = useState(0);
  let songNum = parseInt(words[7]);
  function cleanNum() {
    if (songNum === ":i") {
      songNum = 0;
      return songNum;
    } else if (sNum >= slides.length) {
      return (songNum = 0);
    } else {
      return songNum;
    }
  }
  cleanNum();

  useEffect(() => {
    if (songNum > 9) {
      setPerPage(20);
    }
    if (songNum > 19) {
      setPerPage(30);
    }
    if (songNum > 29) {
      setPerPage(40);
    }
    if (songNum > 39) {
      setPerPage(50);
    }
    if (songNum > 49) {
      setPerPage(60);
    }
    setsNum(parseInt(songNum));
  }, [setPerPage, songNum]);

  const [textTitle, setTextTitle] = useState("");
  const [textArtist, setTextArtist] = useState("");

  function songImg(song_art_image_url, title, artistname, x) {
    if (song_art_image_url === undefined) {
      setSongimg(pandaImg);
    }
    if (x >= slides.length - 1) {
      setsNum(0);
    }
    if (songimg === undefined) {
      setSongimg(pandaImg);
    } else {
      setSongimg(song_art_image_url);
      setTextTitle(title);
      setTextArtist(artistname);
      setCurrent(parseInt(x));
    }
  }
  // ===== Artist name (svg or h2) =====
  const [nLen, setNLen] = useState(true);
  useEffect(() => {
    let nameLength = `${artistName}`;

    if (nameLength.length > 15) {
      setNLen(false);
    } else {
      setNLen(true);
    }
  }, [setNLen, artistName]);
  // ===== Shuffle (sort) button =====
  const [count, setCount] = useState(0);
  const [shuffle, setShuffle] = useState("popularity");
  useEffect(() => {
    let x = count;
    if (x % 2 !== 0) {
      setShuffle("title");
    }
    if (x % 2 === 0) {
      setShuffle("popularity");
    }
  }, [setShuffle, count]);
  // ========================= Fetch Artists Songs =========================
  const sort = shuffle;
  const page = 1;
  const per_page = perPage;

  useEffect(() => {
    fetch(
      `https://genius.p.rapidapi.com/artists/${songId}/songs?sort=${sort}&page=${page}&per_page=${per_page}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key":
            "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
        },
      }
    ).then((res) => {
      res.json().then((resp) => {
        // console.log(resp);
        let apidata = resp.response.songs;
        setS0(apidata);
      });
    });
  }, [songId, sort, page, per_page]);
  // ========================= Fetch Artists Songs end =========================

  // ============== Play Pause btn =============
  const [play, setPlay] = useState(0);
  const [pause, setPause] = useState("0s");
  useEffect(() => {
    let pbar = document.getElementById("pbar");
    let x = play;
    if (x % 2 !== 0) {
      setPause((pbar.style.animationDuration = "10s"));
    } else if (x % 2 === 0) {
      setPause((pbar.style.animationDuration = pause));
    }
    setPlay(x);
  }, [setPause, play, pause]);
  // ======= Song Selection ======
  let flag = current;
  function songSelect(a, title2, artist2) {
    setCurrent(a);
    setTextTitle(title2);
    setTextArtist(artist2);
  }
  function songRange(num) {
    if (num === slides.length) {
      flag = 0;
      num = 0;
    }
    if (num < 0) {
      flag = slides.length - 1;
      num = slides.length - 1;
    }
  }
  function controller(x) {
    flag = flag + x;
    songRange(flag);
    setSongimg(s0[flag].song_art_image_url);
    setTextTitle(s0[flag].full_title);
    setTextArtist(s0[flag].primary_artist.name);
    setCurrent(flag);
  }
  songRange(flag);
  // ====================== X ======================

  return (
    <React.Fragment>
      <div id="songSection" style={{ backgroundImage: `url(${songimg})` }}>
        <div className="note">
          <p>Note: Don't have access to play music.</p>
        </div>
        <div className="song-box">
          <div className="music-panel">
            <div className="song-img">
              <div className="songtext">
                <p>{textTitle}</p>
                <p>{textArtist}</p>
              </div>
              <img src={songimg} alt="album art" />
            </div>
            <div className="musicbar">
              <div id="pbar" className="progressbar"></div>
            </div>
            <div className="music-btn">
              <div onClick={() => setCount(count + 1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-shuffle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                  />
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
              </div>
              <div onClick={() => controller(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-skip-backward-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z" />
                </svg>
              </div>
              <div onClick={() => setPlay(play + 1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
              <div onClick={() => controller(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-skip-forward-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.271 5.055a.5.5 0 0 1 .52.038L7.5 7.028V5.5a.5.5 0 0 1 .79-.407L11 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935a.5.5 0 0 1-.79-.407V8.972l-2.71 1.935A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="song-container">
            <h2>
              {nLen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 23">
                  <text className="cls-1" transform="translate(0 17)">
                    <Link to={`/react-music/artist/${words[5]}/${words[6]}`}>
                      <tspan className="cls-2" x="0" y="0">
                        {artistName}
                      </tspan>
                    </Link>
                  </text>
                </svg>
              ) : (
                <Link to="/react-music/artist">
                  <p>{artistName}</p>
                </Link>
              )}
            </h2>
            <p>Verified Artist</p>
            {s0.map((sd, a) => (
              <div
                className="songslist b-radius"
                key={a}
                onLoad={() =>
                  songImg(
                    s0[sNum].song_art_image_url,
                    s0[sNum].full_title,
                    s0[sNum].primary_artist.name,
                    songNum
                  )
                }
                onClick={() =>
                  songImg(
                    sd.song_art_image_url,
                    sd.full_title,
                    sd.primary_artist.name
                  ) & songSelect(a, sd.full_title, sd.primary_artist.name)
                }
              >
                <div className="song-card b-radius">
                  <img
                    src={sd.song_art_image_thumbnail_url}
                    alt="Song Thumbnail"
                  />
                </div>
                <div className="songdetail">
                  <p>{sd.full_title}</p>
                  <p>Views : {sd.stats.pageviews}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MusicListen;
