import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/GameDetails.css'

export default function RetroConsoleDetails () {

  let { id } = useParams()
    const [console, setConsole] = useState('')

    useEffect(() => {
        const getConsole = async () => {
            const response = await axios.get(`http://localhost:3001/consoles/${id}`)
            setConsole(response.data)
        }
        getConsole()
    }, [id])

    const addToCart = async () => {
        try {
            if (userId) {
                await axios.post(`http://localhost:3001/users/${userId}/shopping-cart/add`, {
                    itemId: console._id
                })
                alert("Item added to cart successfully!")
            } else {
                alert("Please log in to add items to the cart.")
            }
        } catch (error) {
            console.error('Error occurred while adding to cart:', error)
        }
    }


    return(
        <div className="details-card">
      <h1>{console.name}</h1>
      <img className='consoles-cover' src={console.img_path} alt="" />
      <h3> Release Year: {console.year_released}</h3>
      <h3> Brand {console.brand}</h3>
      <h2> ${console.price}</h2>
      <button onClick={addToCart}>Add to Cart</button>
      <Link className='return-link' to='/retro'> Pixelate! </Link>
    </div>
    )
}