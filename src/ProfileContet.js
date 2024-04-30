import React from 'react'
import { UserContext } from './Context/GlobalContext'
import { useContext } from 'react'

const ProfileContext = () => {
    const {name,age}=useContext(UserContext)
  return (
    <div>ProfileContext---- {name}-{age}</div>
  )
}

export default ProfileContext