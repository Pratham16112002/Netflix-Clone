
import './App.css';
import Row from './Row'
import requests from './request';
import Banner from './Banner'
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Romance Movies" 
      fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App; 
