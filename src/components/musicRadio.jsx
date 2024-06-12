import React from 'react';
function MusicRadio() {
    const radiolist= [
        {p1:"The Hot 100", p2:"Songs you know and love",p3:"LIVE - 10:00-12:00 PM" , p4:"Explore the richand vibrant content",img:"https://i.scdn.co/image/ab67706c0000bebb3bd5501a335b265807df34db"},
        {p1:"Pop Hits", p2:"The pop music that matters",p3:"LIVE - 12:30-14:30 PM" , p4:"Playing current and classics",img:"https://media.istockphoto.com/vectors/radio-music-colorful-neon-sign-with-megaphone-icon-and-musical-notes-vector-id1201351220?b=1&k=6&m=1201351220&s=170667a&w=0&h=nLtljGJA2c3cokXVPUzjWFGjTEIIr9SqiEgewnvdEi4="},
        {p1:"Today's Hits", p2:"Where it sounds like home",p3:"LIVE- 15:00-18:00 PM" , p4:"Explore the content",img:"https://cdn-profiles.tunein.com/s242677/images/logod.jpg?t=2"}
    ]
    return ( 
        <React.Fragment>
            <div id="radioSection" style={{minHeight:"65vh"}}>
                <h1>Radio</h1>
                <div className="container-browse">
                    {radiolist.map((r,i)=>
                        <div className="div33" key={i}>
                            <p>{r.p1}</p>
                            <p>{r.p2}</p>
                            <div className="r-img b-radius c-hover">
                                <img src={r.img} alt="radio live"/>
                                <div className="div-blur">
                                    <p>{r.p3}</p>
                                    <p>{r.p4}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        </React.Fragment>
     );
}

export default MusicRadio;