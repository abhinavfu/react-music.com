import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MusicSearch() {
  const [searchItem, setSearchList] = useState([]);
  const [data, setData] = useState("");
  const [hideShow, setHideShow] = useState(false);
  // const [singleIdX, setSingleId] = useState([]);

  // Search Input Value
  function getData(val) {
    let zz = val.target.value;
    let text = `${zz}`;
    const words = text.split(" ");
    let cleanText = words.filter((elm) => {
      return elm !== "";
    });
    cleanText = cleanText.join("%20");
    setData(cleanText);
    // console.log(cleanText);
  }
  const artistList = [
    { name: "Sia", id: 16775 },
    { name: "Arijit Singh", id: 205744 },
    { name: "Ariana Grande", id: 26507 },
    { name: "The Weeknd", id: 2358 },
    { name: "ZAYN", id: 339472 },
    { name: "Shreya Ghoshal", id: 254315 },
    { name: "Katy Perry", id: 1195 },
    { name: "Rihanna", id: 89 },
    { name: "Zara Larsson", id: 55903 },
    { name: "Shawn Mendes", id: 195029 },
    { name: "Jubin Nautiyal", id: 1196348 },
  ];

  // RAPID API Search
  useEffect(() => {
    let isMount = true;
    // fetch(`https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar`, {
    fetch(`https://genius.p.rapidapi.com/search?q=${data}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
      },
    }).then((res) => {
      res.json().then((resp) => {
        // console.log(resp);
        if (isMount) {
          let apisearch = resp.response.hits;
          setSearchList(apisearch);
        }
        // console.log(apisearch)
      });
    });

    return () => {
      isMount = false;
    };
  }, [data]);

  function Artist(props) {
    const [artistId, setArtistsList] = useState([]);

    // 2) RAPID API Artists
    useEffect(() => {
      let isMount = true;
      fetch(`https://genius.p.rapidapi.com/artists/${props.id}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key":
            "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
        },
      }).then((res) => {
        res.json().then((resp) => {
          // console.log(resp);
          if (isMount) {
            let apidata = [resp.response.artist];
            setArtistsList(apidata);
          }
          // console.log(apidata)
        });
      });

      return () => {
        isMount = false;
      };
    }, [props.id]);

    return (
      <React.Fragment>
        {artistId.map((a, i) => (
          <div className="div33" key={i}>
            <Link to={`/react-music.com/artist/${props.id}/${a.name}`}>
              <p>{a.name}</p>
              <div className="r-img b-radius c-hover">
                <img src={a.image_url} alt="Artist Album Cover" />
                <div className="div-blur">
                  <p>Facebook id : {a.facebook_name}</p>
                  <p></p>
                  <p>Instagram Id : {a.instagram_name}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div id="searchSection" className="searchArea">
        <h1>Feel Free to Search Here</h1>
        <div className="container">
          <h3>Search</h3>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            onChange={getData}
            onChangeCapture={() => setHideShow(true)}
          />
          {/* <div style={{ width: 1000 }}>{searchItem.map((e, p) => (<p key={p}>name:"{e.result.primary_artist.name}", id:{e.result.primary_artist.id}</p>))}</div> */}
          {/* <div style={{width:1000}}>{searchItem.map((e,i)=><p>{i+1}) {e.result.primary_artist.name}'s id = {e.result.primary_artist.id}</p>)}</div> */}
          {hideShow ? <h3>Top 10 Search results</h3> : null}
          {hideShow ? <p>See All</p> : null}

          {searchItem.map((data, i) => (
            <div className="music-card-content" key={i}>
              <Link
                to={`/react-music.com/listen/${data.result.primary_artist.id}/${data.result.primary_artist.name}/${i}`}
              >
                <div className="music-card b-radius c-hover">
                  <img
                    className="c-hover"
                    src={data.result.header_image_url}
                    alt={
                      "image of " +
                      data.result.primary_artist.name +
                      "album track"
                    }
                  />
                </div>
                <p>{data.result.full_title}</p>
                <p>
                  <a href={data.result.primary_artist.image_url}>
                    {data.result.primary_artist.name}
                  </a>
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="container">
          <div style={{ width: "100%", marginBottom: "30px" }}>
            <h2>Popular Artists</h2>
          </div>

          {artistList.map((l, j) => (
            <Artist id={l.id} key={j} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MusicSearch;
