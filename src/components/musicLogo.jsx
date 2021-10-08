import React from 'react';

function MusicLogo() {
    return ( 
        <React.Fragment>
            <div id="logoSection">
                <div className="logobox">
                    <h1>Music.com</h1>
                    <h3>Discover new music every day.</h3>
                    <p>Get playlists and albums inspired by the artists and genres you're listening to.
                        3 months free, then $9.99/month.
                    </p>
                    <button>Try It Free</button> 
                </div>
                <div id="c-pos">
                    <div className="c-circle circle1"></div>
                    <div className="c-circle circle2"></div>
                    <div className="c-circle circle3"></div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default MusicLogo;
