import AnimesList from "./AnimesList";
import useFetch from "./useFetch";

const Home = () => {
      let  {data : animes , pending , error} = useFetch("https://api.jikan.moe/v4/anime")

    return ( 
       <div>
            {pending && <h1 class="spinner-border text-danger">loading...........</h1> }
            {animes && <AnimesList animes={animes}/> }

        </div>
     );
}
 
export default Home;