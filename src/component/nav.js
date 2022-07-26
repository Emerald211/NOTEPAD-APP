import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'



function Nav(props) {

  return (
      <div>
          <nav>
        <h2 style={{color: props.mode ? "rgba(19, 27, 116, 0.8)" : ""}} >NotePad</h2>
              <ul>
          <li style={{color: props.mode ? "rgba(19, 27, 116, 0.8)" : ""}} onClick={props.change}> <FontAwesomeIcon icon={props.mode ? faSun : faMoon} /></li>
              </ul>
          </nav>
    </div>
  )
}

export default Nav;