import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function MusicListen() {
  const [track, setTrack] = useState([]);
  const [songs, setSongs] = useState([]);
  const [spotify, setSpotify] = useState('');
  const [trackId, setTrackId] = useState("2849661");
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [sort, setSort] = useState("popularity");

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
  var tracknum = words[7];
  useEffect(() => {
    setTrackId(tracknum);
  }, [tracknum]);
  // ========================= Fetch Song Track =========================
  const page = 1;
  const per_page = perPage;

  useEffect(() => {
    let isMount = true;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    // artist id = { name: "Sia", id: 16775 },
    fetch(
      `https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=${songId}&per_page=${per_page}&page=${page}&sort=${sort}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.songs);
        if (isMount) {
          let apidata = response.songs;
          setSongs(apidata);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMount = false;
    };
  }, [songId, page, per_page, sort]);

  useEffect(() => {
    let isMount = true;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    // song track id=2396871
    fetch(
      `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${trackId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.song);
        if (isMount) {
          let apidata = response.song;
          setTrack(apidata);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMount = false;
    };
  }, [trackId]);
  
  // ========================= spotify play =========================
  useEffect(() => {
    let ids = track['spotify_uuid']
    // ids =  4WNcduiCmDNfmTEz7JvmLv
    const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${ids}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      setSpotify(response.tracks[0]['preview_url']);
    })
    .catch((err) => console.error(err));

  }, [track]);
  // ========================= Fetch Song Track end =========================
  const trackDetails = [
    {
      title: track.title,
      id: track.id,
      artist: track.artist_names,
      image: track.song_art_image_url,
    },
  ];

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

  useEffect(() => {
    let x = count;
    if (x % 2 !== 0) {
      setSort("title");
    }
    if (x % 2 === 0) {
      setSort("popularity");
    }
  }, [setSort, count]);

  // ============== Play Pause btn =============
  const [play, setPlay] = useState(0);
  // const [pause, setPause] = useState("0s");
  // useEffect(() => {
  //   let pbar = document.getElementById("pbar");
  //   let x = play;
  //   if (x % 2 !== 0) {
  //     setPause((pbar.style.animationDuration = "10s"));
  //   } else if (x % 2 === 0) {
  //     setPause((pbar.style.animationDuration = pause));
  //   }
  //   setPlay(x);
  // }, [setPause, play, pause]);

  // ======= Song Selection ======
  // var flag = words[8];
  var flag = 0;
  function songSelect(id) {
    tracknum = id;
    return id;
  }

  useEffect(() => {
    // console.log(tracknum);
    setTrackId(tracknum);
  }, [tracknum]);

  function songRange(num, len) {
    if (num === len) {
      flag = 0;
      num = 0;
    }
    if (num < 0) {
      flag = len - 1;
      num = len - 1;
    }
  }
  function controller(x) {
    flag = flag + x - 1;
    var len = 10;
    // var len = track.albums.length;
    // setTrackId(track.albums[flag].id);
    songRange(flag, len);
  }
  songRange(flag);
  // ====================== X ======================

  return (
    <React.Fragment>
      {trackDetails.map((i) => (
        <div id="songSection" style={{ backgroundImage: `url(${i.image})` }}>
          <div className="note">
            <p>Note: Don't have access to play music.</p>
          </div>
          <div className="song-box">
            <div className="music-panel">
              <div className="song-img">
                <div className="songtext">
                  <p>{i.title}</p>
                  <p>{i.artist}</p>
                </div>
                <img src={i.image} alt="album art" />
              </div>
              <audio src={spotify} controls></audio>
              {/* <div className="musicbar">
                <div id="pbar" className="progressbar"></div>
              </div> */}
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
                      <Link
                        to={`/react-music.com/artist/${words[5]}/${words[6]}`}
                      >
                        <tspan className="cls-2" x="0" y="0">
                          {artistName}
                        </tspan>
                      </Link>
                    </text>
                  </svg>
                ) : (
                  <Link to="/react-music.com/artist">
                    <p>{artistName}</p>
                  </Link>
                )}
              </h2>
              <p>Verified Artist</p>
              <div>
                {songs.map((j, a) => (
                  <Link
                    to={`/react-music.com/listen/${j.primary_artist.id}/${j.primary_artist.name}/${j.id}`}
                  >
                    <div
                      className="songslist b-radius"
                      key={a}
                      // onLoad={() => songSelect(j.id)}
                      // onClick={songSelect(j.id)}
                    >
                      <div className="song-card b-radius">
                        <img
                          src={j.song_art_image_thumbnail_url}
                          alt="Song Thumbnail"
                        />
                      </div>
                      <div className="songdetail">
                        <p>{j.full_title}</p>
                        <p>Released Date : {j.release_date_for_display}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default MusicListen;
