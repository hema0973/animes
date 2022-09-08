import { useEffect, useState } from "react";

const AnimesList = ({animes}) => {
  let[wish , setWish]= useState([]);
useEffect(()=>{
    if(localStorage.getItem("wish")===null );
    {
        localStorage.setItem("wish","[]");
    }
}  , [])

 let handleWishlist = (id) =>{
   let x = localStorage.getItem("wish")
   x =JSON.parse(x) //json to js converter
   if(!x.includes(id)) 
   { 
    alert("added to wishlist");
   x.push(id);
   x = JSON.stringify(x);  //js to JSON converter
   localStorage.setItem("wish" ,x);
   console.log(x ,typeof x);
 }
 else 
 {
    alert("removed from wishlist")
let i = x.indexOf(id);
x.splice(i,1);
x=JSON.stringify(x);
localStorage.setItem("wish" ,x);
 }
}   

    return ( 
        <div className="div1 d-grid justify-content-center">
            {
                animes.map((anime)=>{
                return(
                    <div key={anime.mal_id}  className="anime">
                    <img src={anime.images.jpg.large_image_url} alt="poster not found"></img><br></br>
                        <h1>{anime.aired.string}</h1>
                        <h1>Duration:{anime.duration}</h1>
                        <h1>{anime.broadcast.string}</h1>
                        <h1>{anime.producers.name}</h1>
                       { /*<i class='bx bxs-heart'></i>*/}
                      {/*  <button onClick={()=>{handleWishlist(anime.mal_id)}}>add to wishlist</button>*/}
                    <button onClick={()=>{handleWishlist(anime.mal_id)}}> 
                        &#10084;
                        </button>
                    </div>
                )

                })
            }
            
        </div>
     );
        }
 
export default AnimesList;