import React,{useContext} from 'react'
import './Success.css'

import UserContext from '../../UserContext'

function Success() {
    const {user} = useContext(UserContext);
  return (
    <div className="success">
        <h1>Thank You For Submitting The Form {user.name}.</h1>
    </div>
  )
}

export default Success