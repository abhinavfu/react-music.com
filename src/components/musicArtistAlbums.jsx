import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testimg from './panda.svg'

function MusicArtistAlbums(props) {
    const API_Fetch = props.API_Fetch;
    let URLValue = window.location.href;
    let textID = `${URLValue}`;
    const words = textID.split("/");

    // ===== Set artist Id =====
    let songId = words[5];
    // function cleanId() {
    //     if (songId === ":id") {
    //     songId = 1072207;
    //     return songId;
    //     } else {
    //     return songId;
    //     }
    // }
    // cleanId();
    // ----------------------------------------------------------
    const albumId = parseInt(songId)
    // console.log(albumId)
    const [albumDetail, setArtistAlbumDetails] = useState({"id":"1","name":"test Album name","cover_art_thumbnail_url":testimg,"release_date_for_display":"Test 12 july,2023","description_preview":"Test description_preview","artist":{"name":"Test Artist name"}});
    const [albumAppearance, setArtistAlbumAppearance] = useState([{"track_number":"1","song":{"title_with_featured":"test title_with_featured","primary_artist":{"name":"Test Artist name"}}},
                                                                  {"track_number":"2","song":{"title_with_featured":"test title_with_featured","primary_artist":{"name":"Test Artist name"}}}
                                                                ]);
    const [albumsCount, setAlbumsCount] = useState(2);
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
    }, [albumId]);

    // ----------- Artist Details -------------
    useEffect(() => {
        let isMount = true;
        fetch(
        `${API_Fetch["api-url"]}/album/appearances/?id=${albumId}&per_page=${albumsCount}&page=${page}`,
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
    }, [albumId, albumsCount,page]);


    return (<>
        <div id="browseSection" style={{minHeight:"65vh"}}>
            <div className="albumDetails">
                <div className="music-card b-radius c-hover">
                    <img
                    className="c-hover"
                    src={albumDetail?.cover_art_thumbnail_url}
                    alt={`image of ${albumDetail?.name} album`}
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