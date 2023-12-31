import { useState, useEffect } from "react";

export const useFetch =(url, method= 'GET')=>{
    const [data,setData]=useState(null)
    const [ isPending , setIsPending]= useState(false) 
    const [error, setError]= useState (null)
    const [options ,setOptions] =useState(null)


    const postData=(postData)=>{
        setOptions({
            method:'POST',
            Headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)

        })


    }

    // use UseRef to wrap an object/array argument,which is a useEffect dependency
    // const options= useRef(_options).current



    useEffect(()=>{
        console.log(options)

        const controller = new AbortController()
        
        
        const fetchData= async(fetchOptions)=>{
            setIsPending(true)
             
            try {
                const res = await fetch (url,{...fetchOptions,signal: controller.signal})
                if (!res.ok){
                    throw new Error(res.statusText)

                }
                const json = await res.json()
                
                setIsPending(false)
                setData(json)
                setError(null)
            } catch (err) {
                if(err.name === "AbortError" ){
                    console.log('the fetch was aborted')
                }else{
                    setIsPending(false)
                    setError('could not fetch data')
                }
            }
             
            
        }

        if(method ==="GET"){
            fetchData()
        }
        if(method ==="POST" && options){
            fetchData(options)

        }
        
        
         return()=>{
            controller.abort()

        }

    }, [url, options,method])

    return{data: data,isPending,error,postData}

}






