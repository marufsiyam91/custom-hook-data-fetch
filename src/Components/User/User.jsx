import React from 'react'
import './user.css'

function User({user}) {
     const {id, title, body} = user
  return (
    <div className='product_list_wrapper'>
          <h1>Id: {id}</h1>
          <h1>Title: {title}</h1>
          <h1>Content: {body}</h1>
    </div>
  )
}

export default User
