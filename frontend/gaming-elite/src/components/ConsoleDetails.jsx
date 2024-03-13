import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/ConsoleDetails.css'

export default function ConsoleDetails ({ user_id }) {

    let { id } = useParams()
    const [consoles, setConsoles] = useState('')

    useEffect(() => {
        const getConsole = async () => {
            const response = await axios.get(`http://localhost:3001/consoles/${id}`)
            setConsoles(response.data)
        }
        getConsole()
    }, [id])

    const addToCart = async () => {
        try {
            if (user_id) {
                await axios.post(`http://localhost:3001/users/${user_id}/shopping-cart/items`, {
                    itemId: consoles._id
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
      <h1>{consoles.name}</h1>
      <img className='consoles-cover' src={consoles.img_path} alt="" />
      <h3> Release Year: {consoles.year_released}</h3>
      <h3> Brand {consoles.brand}</h3>
      <h2> ${consoles.price}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
    )
}