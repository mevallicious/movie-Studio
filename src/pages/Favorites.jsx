import React, { useState } from "react"

const Favorites = () => {

        const localData = JSON.parse(localStorage.getItem("favMovies")) || []
        const [favMovies, setFavMovies] = useState(localData)


        function deleteCard(idx){
            let copyMovies = [...favMovies]
            copyMovies.splice(idx,1)
            setFavMovies(copyMovies)
        }

  return (
    <div className="home">

        <h1 className="page-title">Your Favorites</h1>
        <p className="page-sub">
        Movies you love. Saved forever.
        </p>

        <div className="cards">
        
        {favMovies.map((elem ,idx)=>{
            return(
            <div className="movie-card" key={idx}>
                <div className="poster">
                        <img src={elem["#IMG_POSTER"]} alt="" />
                </div>

                <div className="text">
                    <h2>
                        {elem["#TITLE"]} <span>({elem["#YEAR"]})</span>
                    </h2>
                    <p className="actors">
                        {elem["#ACTORS"]}
                    </p>
                </div>

                <button onClick={()=>{deleteCard(idx)}}>Remove</button>
            </div>
            )
        })}

        </div>
    </div>
  )
}

export default Favorites
