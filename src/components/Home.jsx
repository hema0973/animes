import AnimesList from "./AnimesList";
import useFetch from "./useFetch";

const Home = () => {
      let  {data : animes , pending , error} = useFetch("https://api.jikan.moe/v4/anime")

    return ( 
       <div className="home-content">
            {pending && <h1>loading...........</h1> }
            {animes && <AnimesList animes={animes}/> }
            {error && <h1>{error}</h1>}

        </div>
     );
}
 
export default Home;