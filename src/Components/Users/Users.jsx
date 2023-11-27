import React from 'react'
import usefetch from '../usefetch'
import User from '../User/User'
import './Users.css'


function Users() {
     const {data, error, loading} = usefetch('https://jsonplaceholder.typicode.com/posts')
     if(error){
          console.log(error)
     }
  return (
     <>
           <div>
               {loading && <h1>{loading}</h1>}
               {data && (
                    <div className='user_detail_container'>
                    {data.map((users) => <User key={users.id} user={users}/>)}
                    </div>
               )}
          </div>
     </>
  )
}

export default Users
