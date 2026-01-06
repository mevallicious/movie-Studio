import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({movie}) => {

    const navigate= useNavigate()

    function handleFav(){
        const localData = JSON.parse(localStorage.getItem("favMovies")) || []

        const exists = localData.find((dets)=> dets["#RANK"] === movie["#RANK"])
        
        if(exists){
            return
        }

        const updateFav =[...localData,movie]

        localStorage.setItem("favMovies",JSON.stringify(updateFav))

        navigate('/fav')

    }

    return (
        <button onClick={handleFav} className="fav-btn"> Add to Favorites </button>
  )
}

export default Button