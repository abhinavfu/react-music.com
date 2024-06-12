import React from "react";
import { Link } from "react-router-dom";
import MusicArtistSongs from "./musicArtistSongs";

function MusicBrowse(props) {
  const artistIdList = [
    { name: "Ariana Grande", id: 1 },
    { name: "Lana Del Rey", id: 2 },
    { name: "The Weeknd", id: 3 },
    { name: "5 Seconds of Summer", id: 4 },
    { name: "Bruno Mars", id: 5 },
    { name: "Billie Eilish", id: 6 },
    { name: "Harry Styles", id: 7 },
    
    // { name: "Ariana Grande", id: 26507 },
    // { name: "Camila Cabello", id: 609667 },
    // { name: "Atif Aslam", id: 357955 },
    // { name: "Harry Styles", id: 22457 },
    // { name:"Arijit Singh", id:205744 },
    // { name: "BTS", id: 70113 },
    // { name: "Taylor Swift", id: 1177 },
    // { name: "Ed Sheeran", id: 12418 },
    // { name: "ZAYN", id: 339472 },
    // { name: "Sia", id: 16775 },
    // { name: "Justin Bieber", id: 357 },
    // { name: "Christina Aguilera", id: 1211 },
    // {name:"Katy Perry", id:1195},
    // {name:"Rihanna", id:89},
    // {name:"Zara Larsson", id:55903},
    // {name:"Shawn Mendes", id:195029},
  ];
  // console.log(artistIdList)
  // ======================================================
  const sort = "popularity";
  const page = 1;
  const per_page = 5;

  return (
    <React.Fragment>
      <div id="browseSection" style={{minHeight:"65vh"}}>
        <h1>Browse</h1>
        <div className="container-browse">
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
            <p>Taylor Swift wins nine Awards</p>
            <p>Taylor Swift</p>
            <div className="c-img b-radius c-hover">
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/13/full/1694595362-0387.png"
                alt="Taylor Swift wins nine Awards"
              />
            </div>
          </div>
        </div>
        {artistIdList.map((exx, a) => (
          <div className="container" key={a}>
            <h3>
              <Link to={`/react-music.com/artist/${exx.id}/${exx.name}`}>
                {exx.name}
              </Link>
            </h3>
            <Link to={`/react-music.com/artist/${exx.id}/${exx.name}`}>
              <p className="seeAll">See All</p>
            </Link>
            <MusicArtistSongs
              API_Fetch={props.API_Fetch} 
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
