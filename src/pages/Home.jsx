import React, { useState } from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import axios from "axios"

//api key- a3f80df2


const Home = () => {

  const [searchValue, setSearchValue] = useState("")

  const localData = JSON.parse(localStorage.getItem("allMovies")) || []
  const [allMovies, setAllMovies] = useState(localData)

  async function getData(){

    const response = await axios.get(
      "https://imdb.iamidiotareyoutoo.com/search",
      {
        params: {
          q: searchValue
        }
      }
      
    )
  const selectedMovie = response.data.description[0]

  setAllMovies(selectedMovie)

  let newUsers = [...allMovies]
  newUsers.push(selectedMovie)

  setAllMovies(newUsers)
  localStorage.setItem("allMovies", JSON.stringify(newUsers))
  
  }

  function submitHandler(e){
    e.preventDefault()
    getData()
    setSearchValue("")
  } 
  return (
    <div className='home'>
        <Search submitHandler={submitHandler} searchValue={searchValue} setSearchValue={setSearchValue} getData={getData}  />
        <div className="cards">
          {allMovies.map(movie => <Card movie={movie} />)}
        </div>
    </div>
  )
}

export default Home 