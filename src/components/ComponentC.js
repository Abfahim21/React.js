import React from 'react'
import { UserConsumer } from './useContext'

export default function ComponentC() {
  return (
   <UserConsumer>
     {
       (username) =>{
         return <p>Hello I'm {username}</p>
       }
     }
   </UserConsumer>
  )
}
