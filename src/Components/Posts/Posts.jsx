import React from 'react'
import Post from '../Post/Post'
import usefetch from '../usefetch'
import "./Posts.css"

const Posts = () => {
     const {data, error, loading} = usefetch('https://jsonplaceholder.typicode.com/users') //"can you explain this line"
     if(error){
       console.log(error)
     }
       return (
         <>
           <div>
              {loading && <h2>{loading}</h2>}
              {data && (
                 <div className='Posts_container'>
                   {data.map((items) => 
                    <Post key={items.id} item={items}/>
                   )}
                 </div>
               )}
     
           </div>
         </>
     )
}

export default Posts
