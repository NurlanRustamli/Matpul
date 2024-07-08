import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
      <h2 className="logo">PulMat</h2>
      <ul className="menu d-flex">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li> 
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
      <form >
        <input type="search" />
        <button>Search</button>
      </form>
      </div>
    </div>
      
    </>
  )
}

export default Navbar