import React, { useState } from "react";
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
  const [count, setCount] = useState(10);

  const artistIdList = [{ name: artistName, id: songId }];
  const sort = "popularity";
  const page = 1;
  const per_page = count;
  return (
    <React.Fragment>
      <div id="browseSection">
        <h1>Artist</h1>
        {artistIdList.map((exx, a) => (
          <div className="container" key={a}>
            <h3>{exx.name}</h3>
            <p className="seeAll" onClick={() => setCount(count + 10)}>
              See All
            </p>
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

export default MusicArtistPage;
