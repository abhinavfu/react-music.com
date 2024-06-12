import Music from './components/music';


function App() {
  const API_Fetch = {
    // TEST
    // "api-url": "http://127.0.0.1:8000/musicapi",
    // "headers": {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    // },

    // Rapid API
    "api-url": "https://genius-song-lyrics1.p.rapidapi.com",
    "headers": {
      "X-RapidAPI-Key": "0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  }

  return (
    <div className="App">
      <Music API_Fetch={API_Fetch} />
    </div>
  );
}

export default App;
