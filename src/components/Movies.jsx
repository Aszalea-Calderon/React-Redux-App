import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { getMovie } from '../actions'

const Movies = ({title, isFetching, movie,  ...props }) => {
  useEffect(() =>{
  })

  const handleGetMovie = e => {
    e.preventDefault();
   // props.getMovie();
    props.dispatch(getMovie())
 // props.dispatchGetMovie()
  }


  if(isFetching){
    return <h2>Fetching Ghibli...</h2>
  }
  return (
    <>
      <h2>Your next movie is... {title}</h2>
     
      <button onClick={handleGetMovie}>Generate your next movie</button>

      {movie?.map(move=>{
        return(
        <> 
        <h1>{move.title}</h1>
        <p>{move.description}</p>
        </>)
      })}
    </>
  );
}

const mapStateToProps = state =>{
  return{
   // title: state.title,
   //This narrowing down the function. State will be at the end the full stores state. Then map state to props is taking the piecs of tstate that we want to give, to our movies component. This narrows to only the thing that you want. 
    movie: state.movie, //Maybe?
    isFetching: state.isFetching,
    error: state.error
    
  }
}

// const mapDispatchToProps = {
//    dispatchGetMovie: getMovie,
// }
//export default connect(mapStateToProps, mapDispatchToProps)(Movies)

//this is the tool you make to connect to tell connect, how is is suppose to send the state info over to movies. 

//-- This is what below is doing --//
// const connectResult =connect(mapStateToProps, { getMovie })
// const result2 = connectResult(Movies)
// export default result2

export default connect(mapStateToProps)(Movies)
//dispatch is a function. This is what is returned if I gave it nothing else and null
//

//if nothing is passed it just passes dispatch
//It is a funciton that you can call
//
//{ getMovie }