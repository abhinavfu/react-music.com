import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MusicArtistAlbums() {
    let URLValue = window.location.href;
    let textID = `${URLValue}`;
    const words = textID.split("/");

    // ===== Set artist Id =====
    let songId = words[5];
    function cleanId() {
        if (songId === ":id") {
        songId = 1072207;
        return songId;
        } else {
        return songId;
        }
    }
    cleanId();
    // ----------------------------------------------------------
    const albumId = songId
    const [albumDetail, setArtistAlbumDetails] = useState([]);
    const [albumAppearance, setArtistAlbumAppearance] = useState([]);
    const [albumsCount, setAlbumsCount] = useState(2);
    const page = 1;
    // ----------------------------------------------------------

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
        `https://genius-song-lyrics1.p.rapidapi.com/album/details/?id=${albumId}`,
        options
        )
        .then((response) => response.json())
        .then((response) => {
            if (isMount) {
            let apidata = response['album'];
            setArtistAlbumDetails(apidata);
            console.log(apidata);
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
        `https://genius-song-lyrics1.p.rapidapi.com/album/appearances/?id=${albumId}&per_page=${albumsCount}&page=${page}`,
        options
        )
        .then((response) => response.json())
        .then((response) => {
            if (isMount) {
            let apidata = response['album_appearances'];
            setArtistAlbumAppearance(apidata);
            }
        })
        .catch((err) => console.error(err));
        
        return () => {
        isMount = false;
        };
    }, [albumId, albumsCount,page]);


    return (<>
        <div id="browseSection">
            <div className="albumDetails">
                <div className="music-card b-radius c-hover">
                    <img
                    className="c-hover"
                    // src={albumDetail.cover_art_thumbnail_url}
                    src=''
                    alt='image of {albumDetail.artist.name} album track'
                    />
                </div>
                <div className="info">
                    <h2>{albumDetail?.name}</h2>
                    <Link to="#">
                        {/* <h1>{albumDetail.artist.name}</h1> */}
                    </Link>
                    <p>{albumDetail.release_date_for_display}</p><br/>
                    <p>{albumDetail.description_preview}</p>
                </div>
            </div>
            <div className="container">
                <table>
                    <tbody>
                {/* {albumAppearance.map((i,a) => (
                    <tr key={a}>
                        <td>
                            <a href='{% url "listen" i.song.primary_artist.id i.song.primary_artist.name i.song.id "song" %}'>
                                <table><tr>
                                    <td style="width: 10px;">{i.track_number}</td>
                                    <td style="width: 50px;"><div className="song-thumbnail b-radius c-hover">
                                        <img
                                        src={i.song.song_art_image_thumbnail_url}
                                        alt='image of {i.song.primary_artist.name} album track'
                                        />
                                    </div></td>
                                    <td style="width: 400px;"><p>{i.song.title_with_featured}</p></td>
                                    <td style="width: 400px;"><p>{i.song.primary_artist.name}</p></td>
                                </tr></table>
                            </a>
                        </td>
                    </tr>
                    ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}

export default MusicArtistAlbums;