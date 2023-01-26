
import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default ()=> {
const [movieList, setMovieList] = useState([]);
const [FeaturedData, setFeaturedData] =useState(null);
const [blackHeader, setBlackHeader] =useState(false);
  

  useEffect(()=>{
    const LoadAll = async () =>{
     let list = await tmdb.getHomeList();
     setMovieList(list);

      let originals = list.filter(i=>i.slug=="originals");
      let randomChosen = Math.floor(Math.random () * (originals [0].items.results.length));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);

      

    }
LoadAll();

  },[]);

  useEffect(() => {
    const scrollListener = () => {
     if(window.scrollY > 10 ){
      setBlackHeader(true);
     } else{
      setBlackHeader(false);
     }
     
    }
    window.addEventListener("scroll", scrollListener );
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  },[]);

  return (
    <div className='page'>

      <Header black={blackHeader} />
   
      {FeaturedData && 
      <FeaturedMovie item={FeaturedData}/>
}

      <section className='lists'>
        {movieList.map((item, key)=>(
         <MovieRow key={key}  title={item.title} items ={item.items}/>
        ))}
      </section>
      <footer>
        feito com <span role="img" arial-label="coração">❤</span> por Thainá Urach <br/>
        Direitos de imagem para Netflix <br/>
        Dados do site Themoviedb.org
      </footer>

    {movieList.length <= 0 && 
      <div className='loanding'>
        <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="carregando" />
      </div> }
    </div>
    
  );
        }
/*
function App() {
  return (
    <div>
      olá mundo!
    </div>
  );
}

export default App;

*/
