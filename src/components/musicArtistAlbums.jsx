import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testimg from './loader.svg';

function MusicArtistAlbums(props) {
    const API_Fetch = props.API_Fetch;
    let URLValue = window.location.href;
    let textID = `${URLValue}`;
    const words = textID.split("/");

    // ===== Set artist Id =====
    let songId = words[5];
    
    // ----------------------------------------------------------
    const albumId = parseInt(songId)
    // console.log(albumId)
    const [albumDetail, setArtistAlbumDetails] = useState({"id":"1","name":"","cover_art_thumbnail_url":testimg,"release_date_for_display":"","description_preview":"","artist":{"name":"Loading ..."}});
    const [albumAppearance, setArtistAlbumAppearance] = useState([{"track_number":"1","song":{"title_with_featured":"loading ...","primary_artist":{"name":""}}},
                                                                  {"track_number":"2","song":{"title_with_featured":"loading ...","primary_artist":{"name":""}}}
                                                                ]);

    const page = 1;

    // ----------- Artist Details -------------
    useEffect(() => {
        let isMount = true;
        fetch(
        `${API_Fetch["api-url"]}/album/details/?id=${albumId}`,
        {method: "GET",
        headers: API_Fetch["headers"]}
        )
        .then((response) => response.json())
        .then((response) => {
            if (isMount) {
            let apidata = response['album'];
            setArtistAlbumDetails(apidata);
            }
        })
        .catch((err) => console.error(err));
        
        return () => {
        isMount = false;
        };
    }, [API_Fetch, albumId]);

    // ----------- Artist Details -------------
    useEffect(() => {
        let isMount = true;
        fetch(
        `${API_Fetch["api-url"]}/album/appearances/?id=${albumId}&page=${page}`,
        {method: "GET",
            headers: API_Fetch["headers"]}
        )
        .then((response) => response.json())
        .then((response) => {
            if (isMount) {
                let apidata = response['album_appearances'];
                setArtistAlbumAppearance(apidata);
            }
        })
        .catch((err) => console.error(err));
        
        return () => {isMount = false;};
    }, [API_Fetch, albumId, page]);


    return (<>
        <div id="browseSection" style={{minHeight:"65vh"}}>
            <div className="albumDetails">
                <div className="music-card b-radius c-hover">
                    <img
                    className="c-hover"
                    src={albumDetail?.cover_art_thumbnail_url}
                    alt={`${albumDetail?.name} album`}
                    />
                </div>
                <div className="info">
                    <h2>{albumDetail?.name}</h2>
                    <Link to={`/react-music.com/artist/${albumDetail.artist?.id}/${albumDetail.artist?.name}`}>
                        <h1>{albumDetail.artist?.name}</h1>
                    </Link>
                    <p>{albumDetail?.release_date_for_display}</p><br/>
                    <p>{albumDetail?.description_preview}</p>
                </div>
            </div>
            <div className="container">
                <ul className="track-details">
                    {albumAppearance.map((i,a) => (
                        <li key={a}>
                            <Link to={`/react-music.com/listen/${i?.song?.primary_artist.id}/${i?.song?.primary_artist.name}/${i?.song?.id}`}>
                                <div>{i?.track_number}</div>
                                <div>{i?.song?.title_with_featured}</div>
                                <div>{i?.song?.primary_artist.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>)
}

export default MusicArtistAlbums;