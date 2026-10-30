import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <div id="navbar">
        <div id="left">  
            <Link to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7ZVBd2oOwGe4vCRIOgjf5ZKDmgPSusApKIuXYPuUT5vFgoQwNNyvgs3S&s=10" alt="" /></Link>
        </div>
        <div id="right">
           <Link to={"addproduct"} >ADD PRODUCT</Link>
           <Link to={"viewproduct"}>VIEW PRODUCT</Link>
        </div>
      </div>
  )
}

export default Nav