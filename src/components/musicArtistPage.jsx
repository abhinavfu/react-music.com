import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MusicArtistSongs from "./musicArtistSongs";

function MusicArtistPage() {
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
  const [songsCount, setSongsCount] = useState(2);
  const [albumsCount, setAlbumsCount] = useState(2);
  // ----------------------------------------------------------
  const [artistDetails, setArtistDetails] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);
  // ----------------------------------------------------------
  const sort = "popularity";
  const page = 1;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };
  
  // ----------- Artist Details -------------
  useEffect(() => {
    let isMount = true;
    fetch(
      `https://genius-song-lyrics1.p.rapidapi.com/artist/details/?id=${songId}`,
      options
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
      `https://genius-song-lyrics1.p.rapidapi.com/artist/albums/?id=${songId}&per_page=${albumsCount}&page=${page}`,
      options
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
      `https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=${songId}&per_page=${songsCount}&page=${page}&sort=${sort}`,
      options
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
        <h1>Artist</h1>
        <div className="artistimg"><img src={artistDetails.image_url} alt={'image of '+artistDetails.name} /></div>
        <h1>{artistDetails.name} 
        {artistDetails.is_verified ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
          </svg>) : null}
        </h1>
      </div>
      <div id="browseSection">
          <div className="artistAlbums">
            <h2>Albums</h2>
            <div className="container">
              {artistAlbums.map((i,a) => (
              <Link to={`/react-music.com/albums/${i.id}`}>
                <div className="music-card-content" key={a}>
                  <div className="music-card b-radius c-hover">
                    <img className="c-hover" src={i.cover_art_thumbnail_url} alt={'image of' + i.name + 'album track'} />
                  </div>
                  <p>{i.name}</p>
                  <p>{i.release_date_components.year}</p>
                </div>
              </Link>
              ))}
              <p className="seeAll" onClick={() => setAlbumsCount(albumsCount + 10)}>
                See more
              </p>
            </div>
          </div>
          <div className="artistSongs">
            <h2>Songs</h2>
            <div className="container">
              {artistSongs.map((data,a) => (
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
            <p>{artistDetails.description_preview}</p>
          </div>
      </div>
    </React.Fragment>
  );
}

export default MusicArtistPage;
