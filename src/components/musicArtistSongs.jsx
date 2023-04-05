import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MusicArtistSongs(props) {
  const [m0, setM0] = useState([]);
  // artist id = 344497
  useEffect(() => {
    let isMount = true;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    fetch(
      `https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=${props.data}&per_page=${props.per_page}&page=${props.page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.songs);
        if (isMount) {
          let apidata = response.songs;
          setM0(apidata);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMount = false;
    };
  }, [props.data, props.sort, props.page, props.per_page]);

  return (
    <React.Fragment>
      {m0.map((data, i) => (
        <div className="music-card-content" key={i}>
          <Link
            to={`/react-music.com/listen/${data.primary_artist.id}/${data.primary_artist.name}/${data.id}`}
          >
            <div className="music-card b-radius c-hover">
              <img
                className="c-hover"
                src={data.song_art_image_thumbnail_url}
                alt={"image of " + data.primary_artist.name + "album track"}
              />
            </div>
            <p>{data.full_title}</p>
            <p>{data.primary_artist.name}</p>
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
}

export default MusicArtistSongs;
