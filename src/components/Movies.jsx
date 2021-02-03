import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { getMovie } from '../actions'

const Movies = ({quote, isFetching, error, ...props }) => {
  useEffect(() =>{
  })

  const handleGetMovie = e => {
    e.preventDefault();
    props.getMovie();
  }
  if(isFetching){
    return <h2>Fetching Ghibli...</h2>
  }
  return (
    <>
      <h2>Studio G {quote}</h2>
      {
        error && <div><h2 style={{ color: 'red' }}>We got an error: {error}</h2></div>
      }
      <button onClick={handleGetMovie}>Generate your next movie</button>
    </>
  );
}

const mapStateToProps = state =>{
  return{
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getMovie }) (Movies)
