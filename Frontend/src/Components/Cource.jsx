import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"


const Cource = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/api/Books");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error);

            }
        }
        getBook();

    }, [])
    return (
        <>
            <div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cource