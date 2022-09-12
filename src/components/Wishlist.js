import { useEffect, useState } from "react";
import AnimesList from "./AnimesList";
import useFetch from "./useFetch";

const Wishlist = () => {

        let {data: animes , error , pending } = useFetch("https://api.jikan.moe/v4/anime");
        const [wish , setWish]=useState(null);

        useEffect(()=>{
            let wish = localStorage.getItem("wish");
            wish = JSON.parse(wish);
            setWish(wish);
        } ,[])

    
        return ( 
                <div>
                    {pending && <h1 >Loding....</h1>}
                {animes && <AnimesList animes= {animes.filter((anime)=> {return wish.includes(anime.mal_id)})}/>}
                 {error && <h1>{error}</h1>}
                </div>
               );
}
 
export default Wishlist;