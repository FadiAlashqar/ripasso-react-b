import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [newError, setNewError] = useState(null)


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url);
                const obj = await response.json()
                setData(obj)

            } catch (error) {
                setNewError(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [url])

    return { data, loading, newError }

}

export default useFetch