import React from 'react'
import "./Post.css"

const Post = ({item}) => {
     const{name, username, email, address: {city}, phone, company: {name: companyName}} = item
  return (
    <div className='post_list_wrapper'>
      <h1>Name: {name}</h1>
      <h1>Username: {username}</h1>
      <h1>Email: {email}</h1>
      <h1>City: {city}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Company: {companyName}</h1>
    </div>
  )
}

export default Post
