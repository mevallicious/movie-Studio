import React from 'react'

const Search = (props) => {

  return (
    <div className='searchBar'>
      <form className='form' onSubmit={(e)=>{
        props.submitHandler(e)
      }} >
        <input value={props.searchValue}
        onChange={(e)=>{
          props.setSearchValue(e.target.value)
          // console.log(e.target.value)
        }}
        type="text" placeholder='Enter Movie Name' />
        <button onClick={props.getData}>Search</button>
      </form>
    </div>
  )
}

export default Search