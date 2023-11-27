import React, { useEffect, useState } from 'react'

function usefetch(url) {

     const [data, setData] = useState(null)
     const [error, setError] = useState(null)
     const [loading, setLoading] = useState(false)

     useEffect(() => {
          (async function() {
               try{
                    setLoading(true)
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data)
               }
               catch(error){
                    setError(new Error(`Something went wrong: ${error.message}`));
               }
               finally{
                    setLoading(false)
               }
          })()
     } , [url])
  return {data, error, loading}
}

export default usefetch

