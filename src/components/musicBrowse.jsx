import React from "react";
import { Link } from "react-router-dom";
import MusicArtistSongs from "./musicArtistSongs";

function MusicBrowse() {
  const artistIdList = [
    { name: "Ariana Grande", id: 26507 },
    { name: "Camila Cabello", id: 609667 },
    { name: "Atif Aslam", id: 357955 },
    { name: "Justin Bieber", id: 357 },
    { name: "ZAYN", id: 339472 },
    { name: "Sia", id: 16775 },
    { name: "Harry Styles", id: 22457 },
    { name: "BTS", id: 70113 },
    { name: "Taylor Swift", id: 1177 },
    { name: "Ed Sheeran", id: 12418 },
    { name: "Christina Aguilera", id: 1211 },
    // {name:"Katy Perry", id:1195},
    // {name:"Rihanna", id:89},
    // {name:"Zara Larsson", id:55903},
    // {name:"Shawn Mendes", id:195029},
    // {name:"Arijit Singh", id:205744},
  ];
  // console.log(artistIdList)
  // ======================================================
  const sort = "popularity";
  const page = 1;
  const per_page = 5;

  return (
    <React.Fragment>
      <div id="browseSection">
        <h1>Browse</h1>
        <div className="container">
          <div className="div50">
            <p>NEW IN POP</p>
            <p>Today's Hits rising star</p>
            <p>The Weeknd</p>
            <div className="c-img b-radius c-hover">
              <img
                src="https://www.koimoi.com/wp-content/new-galleries/2020/11/the-weeknd-calls-grammys-2021-corrupt-0001.jpg"
                alt="The Weeknd in grammy 2021"
              />
            </div>
          </div>
          <div className="div50">
            <p>LATEST UPDATED</p>
            <p>Attends BRIT Awards 2021</p>
            <p>Olivia Rodrigo</p>
            <div className="c-img b-radius c-hover">
              <img
                src="https://assets.teenvogue.com/photos/609c026e7165b07169ad92f8/16:9/w_2560%2Cc_limit/GettyImages-1317474859.jpg"
                alt="Olivia Rodrigo in BRIT Awards 2021"
              />
            </div>
          </div>
        </div>
        {artistIdList.map((exx, a) => (
          <div className="container" key={a}>
            <h3>{exx.name}</h3>
            <Link to={`/react-music/artist/${exx.id}/${exx.name}`}>
              <p className="seeAll">See All</p>
            </Link>
            <MusicArtistSongs
              data={exx.id}
              sort={sort}
              page={page}
              per_page={per_page}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default MusicBrowse;

// ================================[[ Main API ]]===============================

// // ======================================================
// const artistId = 16775;
// const sort = "popularity";
// const page = 1;
// const per_page = 20;
// // ======================================================

// // 1) RAPID API Artists Songs
// useEffect(()=>{
//     fetch(`https://genius.p.rapidapi.com/artists/${artistId}/songs?sort=${sort}&page=${page}&per_page=${per_page}`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "genius.p.rapidapi.com",
//             "x-rapidapi-key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf"
//         }
//         }).then((res)=>{res.json().then((resp)=>{
//             console.log(resp);
//             let apidata = resp.response.songs;
//             setMusicList(apidata)
//         })})
// },[]);

// // 2) RAPID API Artists
// useEffect(()=>{
//     // fetch("https://genius.p.rapidapi.com/artists/16775?text_format=as", {
//     fetch(`https://genius.p.rapidapi.com/artists/${artistId}`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "genius.p.rapidapi.com",
//             "x-rapidapi-key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf"
//         }
//         }).then((res)=>{res.json().then((resp)=>{
//             // console.log(resp);
//             let apidata = resp.response.artist;
//             setArtistsList(apidata)
//             console.log(apidata)
//         })})
// },[]);
