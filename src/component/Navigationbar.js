import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterbyname } from '../JS/action/actions'

export const Navigationbar = () => {
  const dispatch=useDispatch()
  return (
    <nav>
    <Link to="/">
    <li>Home</li>
    </Link>
    <Link to="/list">
    <li>Movie List</li>
    </Link>
    <Link to='/add'>
    <li>Add</li>
    </Link>
    <input type="text" onChange={(e)=>dispatch(filterbyname(e.target.value))}/>
    <p>Rate</p>
    </nav>
  )
}
