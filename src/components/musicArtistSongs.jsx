import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MusicArtistSongs(props) {
  const [m0, setM0] = useState([]);

  useEffect(() => {
    fetch(
      `https://genius.p.rapidapi.com/artists/${props.data}/songs?sort=${props.sort}&page=${props.page}&per_page=${props.per_page}`,
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
        setM0(apidata);
      });
    });
  }, [props.data, props.sort, props.page, props.per_page]);

  return (
    <React.Fragment>
      {m0.map((data, i) => (
        <div className="music-card-content" key={i}>
          <Link
            to={`/react-music/listen/${data.primary_artist.id}/${data.primary_artist.name}/${i}`}
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
