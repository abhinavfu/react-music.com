import React, { useState } from "react";
import "./music.css";
import MusicListen from "./musicListen";
import MusicBrowse from "./musicBrowse";
import MusicRadio from "./musicRadio";
import MusicSearch from "./musicSearch";
import MusicFooter from "./musicFooter";
import MusicLogo from "./musicLogo";
import { Switch, Route, Link } from "react-router-dom";
import MusicArtistPage from "./musicArtistPage";
import MusicArtistAlbums from "./musicArtistAlbums";

function Music() {
  // =============== MUSIC.com Homepage ===============

  // ====== Menu toggle btn =====
  const [menuShow, setmenuShow] = useState(false);

  // ======== NavBar =========
  function NavBar() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/react-music.com/listen/16775/Sia/2849661">
              <div>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  aria-hidden="true"
                >
                  <path
                    d="M12 20c4.376 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C7.624 4 4 7.624 4 12c0 4.369 3.631 8 8 8zm0-1.333A6.634 6.634 0 015.341 12a6.628 6.628 0 016.651-6.667A6.653 6.653 0 0118.667 12 6.636 6.636 0 0112 18.667zm-1.467-3.6l4.463-2.636a.483.483 0 000-.839L10.533 8.95c-.337-.204-.784-.047-.784.33v5.458c0 .377.416.55.784.33z"
                    fillRule="nonzero"
                    fillOpacity=".95"
                  ></path>
                </svg>
                Listen Now
              </div>
            </Link>
          </li>
          <li>
            <Link to="/react-music.com">
              <div>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  aria-hidden="true"
                >
                  <path
                    d="M9.92 11.354c.966 0 1.453-.487 1.453-1.49v-3.4c0-1.004-.487-1.483-1.453-1.483H6.452C5.487 4.981 5 5.46 5 6.464v3.4c0 1.003.487 1.49 1.452 1.49H9.92zm7.628 0c.965 0 1.452-.487 1.452-1.49v-3.4c0-1.004-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.479-1.46 1.483v3.4c0 1.003.486 1.49 1.46 1.49h3.46zm-7.65-1.073h-3.43c-.266 0-.396-.137-.396-.418v-3.4c0-.273.13-.41.396-.41h3.43c.265 0 .402.137.402.41v3.4c0 .281-.137.418-.403.418zm7.634 0h-3.43c-.273 0-.402-.137-.402-.418v-3.4c0-.273.129-.41.403-.41h3.43c.265 0 .395.137.395.41v3.4c0 .281-.13.418-.396.418zm-7.612 8.7c.966 0 1.453-.48 1.453-1.483v-3.407c0-.996-.487-1.483-1.453-1.483H6.452c-.965 0-1.452.487-1.452 1.483v3.407c0 1.004.487 1.483 1.452 1.483H9.92zm7.628 0c.965 0 1.452-.48 1.452-1.483v-3.407c0-.996-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.487-1.46 1.483v3.407c0 1.004.486 1.483 1.46 1.483h3.46zm-7.65-1.072h-3.43c-.266 0-.396-.137-.396-.41v-3.4c0-.282.13-.418.396-.418h3.43c.265 0 .402.136.402.418v3.4c0 .273-.137.41-.403.41zm7.634 0h-3.43c-.273 0-.402-.137-.402-.41v-3.4c0-.282.129-.418.403-.418h3.43c.265 0 .395.136.395.418v3.4c0 .273-.13.41-.396.41z"
                    fillRule="nonzero"
                    fillOpacity=".95"
                  ></path>
                </svg>
                Browse
              </div>
            </Link>
          </li>
          <li>
            <Link to="/react-music.com/radio">
              <div>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  aria-hidden="true"
                >
                  <path
                    d="M19.359 18.57C21.033 16.818 22 14.461 22 11.89s-.967-4.93-2.641-6.68c-.276-.292-.653-.26-.868-.023-.222.246-.176.591.085.868 1.466 1.535 2.272 3.593 2.272 5.835 0 2.241-.806 4.3-2.272 5.835-.261.268-.307.621-.085.86.215.245.592.276.868-.016zm-13.85.014c.222-.238.176-.59-.085-.86-1.474-1.535-2.272-3.593-2.272-5.834 0-2.242.798-4.3 2.272-5.835.261-.277.307-.622.085-.868-.215-.238-.592-.269-.868.023C2.967 6.96 2 9.318 2 11.89s.967 4.929 2.641 6.68c.276.29.653.26.868.014zm1.957-1.873c.223-.253.162-.583-.1-.867-.951-1.068-1.473-2.45-1.473-3.954 0-1.505.522-2.887 1.474-3.954.26-.284.322-.614.1-.876-.23-.26-.622-.26-.891.039-1.175 1.274-1.827 2.963-1.827 4.79 0 1.82.652 3.517 1.827 4.784.269.3.66.307.89.038zm9.958-.038c1.175-1.267 1.827-2.964 1.827-4.783 0-1.828-.652-3.517-1.827-4.791-.269-.3-.66-.3-.89-.039-.23.262-.162.592.092.876.96 1.067 1.481 2.449 1.481 3.954 0 1.504-.522 2.886-1.481 3.954-.254.284-.323.614-.092.867.23.269.621.261.89-.038zm-8.061-1.966c.23-.26.13-.568-.092-.883-.415-.522-.63-1.197-.63-1.934 0-.737.215-1.413.63-1.943.222-.307.322-.614.092-.875s-.653-.261-.906.054a4.385 4.385 0 00-.968 2.764 4.38 4.38 0 00.968 2.756c.253.322.675.322.906.061zm6.18-.061a4.38 4.38 0 00.968-2.756 4.385 4.385 0 00-.968-2.764c-.253-.315-.675-.315-.906-.054-.23.261-.138.568.092.875.415.53.63 1.206.63 1.943 0 .737-.215 1.412-.63 1.934-.23.315-.322.622-.092.883s.653.261.906-.061zm-3.547-.967c.96 0 1.789-.814 1.789-1.797s-.83-1.789-1.789-1.789c-.96 0-1.781.806-1.781 1.789 0 .983.821 1.797 1.781 1.797z"
                    fillRule="nonzero"
                    fillOpacity=".95"
                  ></path>
                </svg>
                Radio
              </div>
            </Link>
          </li>
          <li>
            <Link to="/react-music.com/search">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="-6 0 24 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                >
                  <path d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z"></path>
                </svg>
                Search
              </div>
            </Link>
          </li>
        </ul>
        <div className="c-app">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="music-logo"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm5 4.91v9.69c0 1.822-1.45 2.212-2.36 2.212-.904 0-1.649-.696-1.649-1.583 0-1.068.803-1.515 1.822-1.722l.92-.207c.372-.075.488-.348.488-.638l.009-4.639c0-.323-.15-.439-.514-.356l-5.31 1.077c-.306.05-.397.14-.397.505v6.743c0 1.83-1.474 2.253-2.386 2.253-.919 0-1.623-.705-1.623-1.583 0-1.085.812-1.532 1.78-1.764l.987-.199c.306-.074.43-.314.43-.588V7.21c0-.406.29-.58.622-.646l6.262-1.267c.571-.116.919-.05.919.613z"></path>
          </svg>
          Open in App
        </div>
      </React.Fragment>
    );
  }
  function PageNotFound() {
    return (
      <React.Fragment>
        <div className="page404">
          <div>
            <h1>Page Not Found</h1>
            <Link to="/react-music.com">
              <button>Back to Home</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <section id="nav-box">
        <div id="menu" onClick={() => setmenuShow(!menuShow)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div id="fixednav">
          <h1>
            <Link to="/react-music.com/about">Music.com</Link>
          </h1>
          {menuShow ? (
            <nav id="navtop">
              <NavBar />
            </nav>
          ) : null}
          <nav id="navleft">
            <NavBar />
          </nav>
        </div>
      </section>
      <section className="sectionArea" onClick={() => setmenuShow(false)}>
        <Switch>
          <Route path="/react-music.com/listen">
            <MusicListen />
          </Route>
          <Route path="/react-music.com" exact={true}>
            <MusicBrowse />
          </Route>
          <Route path="/react-music.com/radio">
            <MusicRadio />
          </Route>
          <Route path="/react-music.com/search">
            <MusicSearch />
          </Route>
          <Route path="/react-music.com/artist">
            <MusicArtistPage />
          </Route>
          <Route path="/react-music.com/albums">
            <MusicArtistAlbums />
          </Route>
          <Route path="/react-music.com/about">
            <MusicLogo />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <MusicFooter />
      </section>
    </React.Fragment>
  );
}

export default Music;
