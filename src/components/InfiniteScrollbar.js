import React, { useEffect, useState } from 'react'
import Todos from './Todos';
import Loding from './Loding';

const InfiniteScrollbar = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState('true')

    const handleInfiniteScroll = async() => {
        // console.log(document.documentElement.scrollHeight)
        // console.log(window.innerHeight)
        // console.log(document.documentElement.scrollTop)
        try{
            if (document.documentElement.scrollHeight <= window.innerHeight+document.documentElement.scrollTop+1){
                setLoading(true)
                setPage((prev) => prev+1)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`)
                const data = await res.json();
                console.log(data)
                setTodos(prev => [...prev, ...data])
                setLoading(false)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[page])

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll)
        return () => window.addEventListener('scroll', handleInfiniteScroll)
    },[])
  return (
    <>
    <Todos todos={todos} />
    {loading && <Loding />}
    </>
  )
}

export default InfiniteScrollbar