import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MusicArtistSongs from "./musicArtistSongs";
import testimg from './panda.svg'

function MusicArtistPage(props) {
  const API_Fetch = props.API_Fetch;
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
  // ----------------------------------------------------------
  const [songsCount, setSongsCount] = useState(5);
  const [albumsCount, setAlbumsCount] = useState(5);
  // ----------------------------------------------------------
  const [artistDetails, setArtistDetails] = useState({"name":"Test artist name","image_url":testimg,"description_preview":"Test artist description."});
  const [artistAlbums, setArtistAlbums] = useState([{"id":"11","name":"Test album name","cover_art_thumbnail_url":testimg,"release_date_components":{"year":"test 2022 year"}},
                                                    {"id":"12","name":"Test album name","cover_art_thumbnail_url":testimg,"release_date_components":{"year":"test 2022 year"}}]);
  const [artistSongs, setArtistSongs] = useState([{"id":"21","title":"Test song name","song_art_image_thumbnail_url":testimg,"primary_artist":{"id":"11","name":"test artist name"}},
                                                  {"id":"22","title":"Test song name","song_art_image_thumbnail_url":testimg,"primary_artist":{"id":"12","name":"test artist name"}}]);
  // ----------------------------------------------------------
  const sort = "popularity";
  const page = 1;

  // ----------- Artist Details -------------
  useEffect(() => {
    let isMount = true;
    fetch(
      `${API_Fetch["api-url"]}/artist/details/?id=${songId}`,
      {method: "GET",
        headers: API_Fetch["headers"]}
      )
      .then((response) => response.json())
      .then((response) => {
        if (isMount) {
          let apidata = response['artist'];
          setArtistDetails(apidata);
        }
      })
      .catch((err) => console.error(err));
      
      return () => {
      isMount = false;
    };
  }, [songId]);

  // ----------- Artist Albums -------------
  useEffect(() => {
    let isMount = true;
    fetch(
      `${API_Fetch["api-url"]}/artist/albums/?id=${songId}&per_page=${albumsCount}&page=${page}`,
      {method: "GET",
        headers: API_Fetch["headers"]}
    )
      .then((response) => response.json())
      .then((response) => {
        if (isMount) {
          let apidata = response['albums'];
          setArtistAlbums(apidata);
        }
      })
      .catch((err) => console.error(err));
      
      return () => {
        isMount = false;
      };
  }, [songId, page, albumsCount]);

  // ----------- Artist Songs -------------
  useEffect(() => {
    let isMount = true;
    fetch(
      `${API_Fetch["api-url"]}/artist/songs/?id=${songId}&per_page=${songsCount}&page=${page}&sort=${sort}`,
      {method: "GET",
        headers: API_Fetch["headers"]}
    )
      .then((response) => response.json())
      .then((response) => {
        if (isMount) {
          let apidata = response['songs'];
          setArtistSongs(apidata);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMount = false;
    };
  }, [songId, sort, page, songsCount]);

  return (
    <React.Fragment>
      <div className="artist">
        <div className="artistimg"><img src={artistDetails?.image_url} alt={'image of '+artistDetails?.name} /></div>
        <div className="artist-details">
          <h1>{artistDetails?.name} 
          {artistDetails?.is_verified ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
            </svg>) : null}
          </h1>
        </div>
      </div>
      <div id="browseSection"  style={{minHeight:"65vh"}}>
          <div className="artistAlbums">
            <h2>Albums</h2>
            <div className="container">
              {artistAlbums?.map((i,a) => (
                <div className="music-card-content" key={a}>
                  <Link to={`/react-music.com/albums/${i.id}`}>
                  <div className="music-card b-radius c-hover">
                    <img className="c-hover" src={i?.cover_art_thumbnail_url} alt={'image of ' + i.name + ' album track'} />
                  </div>
                  <p>{i.name}</p>
                  <p>{i.release_date_components?.year}</p>
                </Link>
              </div>
              ))}
              <p className="seeAll" onClick={() => setAlbumsCount(albumsCount + 10)}>
                See more
              </p>
            </div>
          </div>
          <div className="artistSongs">
            <h2>Songs</h2>
            <div className="container">
              {artistSongs?.map((data,a) => (
                <div className="music-card-content" key={a}>
                  <Link to={`/react-music.com/listen/${data.primary_artist.id}/${data.primary_artist.name}/${data.id}`}>
                  <div className="music-card b-radius c-hover">
                      <img
                        className="c-hover"
                        src={data.song_art_image_thumbnail_url}
                        alt='image of {data.primary_artist.name} album track'
                      />
                    </div>
                    <p>{data.title}</p>
                    <p>{data.primary_artist.name}</p>
                  </Link>
                </div>
              ))}
              <p className="seeAll" onClick={() => setSongsCount(songsCount + 10)}>
                See more
              </p>
            </div>
          </div>
          <h2>Description</h2>
          <div className="container">
            <p style={{"width":"100%"}}>{artistDetails?.description_preview}</p>
          </div>
      </div>
    </React.Fragment>
  );
}

export default MusicArtistPage;
