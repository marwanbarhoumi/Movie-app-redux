import React from 'react'
import { MovieCard } from './MovieCard'

export const Fav = ({movies}) => {
  return (
    <div>
    {
    movies.map((el)=><MovieCard movie={el} key={el.id}/>)
    }  
  
    </div>
  )
}
