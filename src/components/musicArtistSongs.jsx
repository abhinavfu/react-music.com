import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testimg from './panda.svg'

function MusicArtistSongs(props) {
  const API_Fetch = props.API_Fetch;
  
  const [m0, setM0] = useState([{"id":"1","primary_artist":{"id":"11","name":"Test song name"},"song_art_image_thumbnail_url":testimg},
                                {"id":"2","primary_artist":{"id":"12","name":"Test song name"},"song_art_image_thumbnail_url":testimg}]);
  // artist id = 344497
  useEffect(() => {
    let isMount = true;

    fetch(
      `${API_Fetch["api-url"]}/artist/songs/?id=${props.data}&per_page=${props.per_page}&page=${props.page}&sort=${props.sort}`,
      {method: "GET",
        headers: API_Fetch["headers"]}
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.songs);
        if (isMount) {
          let apidata = response['songs'];
          setM0(apidata);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMount = false;
    };
  }, [props.data, props.sort, props.page, props.per_page,API_Fetch]);

  return (
    <React.Fragment>
      {m0?.map((data, i) => (
        <div className="music-card-content" key={i}>
          <Link
            to={`/react-music.com/listen/${data?.primary_artist.id}/${data?.primary_artist.name}/${data?.id}`}
          >
            <div className="music-card b-radius c-hover">
              <img
                className="c-hover"
                src={data?.song_art_image_thumbnail_url}
                alt={"image of " + data?.primary_artist.name + " album track"}
              />
            </div>
            <p>{data?.full_title}</p>
            <p>{data?.primary_artist.name}</p>
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
}

export default MusicArtistSongs;
