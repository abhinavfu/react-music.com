import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MusicSearch(props) {
  const API_Fetch = props.API_Fetch;

  const [searchItem, setSearchList] = useState([]);
  const [data, setData] = useState("");
  const [hideShow, setHideShow] = useState(false);
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

  // RAPID API Search
  useEffect(() => {
    let isMount = true;

    // "https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1",
    fetch(
      `${API_Fetch["api-url"]}/search/?q=${data}&per_page=10&page=1`,
      {method: "GET",
        headers: API_Fetch["headers"]}
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        if (isMount) {
          let apisearch = response["hits"];
          setSearchList(apisearch);
        }
        // console.log(apisearch)
      })
      .catch((err) => console.error(err));

    return () => {
      isMount = false;
    };
  }, [data, API_Fetch]);

  return (
    <React.Fragment>
      <div id="searchSection" className="searchArea"  style={{minHeight:"65vh"}}>
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
          {hideShow ? <h3>Top 10 Search results</h3> : null}
          {hideShow ? <p>See All</p> : null}

          {searchItem?.map((data, i) => (
            <div className="music-card-content" key={i}>
              <Link
                to={`/react-music.com/listen/${data.result.primary_artist.id}/${data.result.primary_artist.name}/${data.result.id}`}
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
      </div>
    </React.Fragment>
  );
}

export default MusicSearch;
