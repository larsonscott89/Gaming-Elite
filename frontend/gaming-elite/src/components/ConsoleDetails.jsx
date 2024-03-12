import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/ConsoleDetails.css'

export default function ConsoleDetails ({ userId }) {

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
            if (userId) {
                await axios.post(`http://localhost:3001/users/${userId}/shopping-cart/add`, {
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
        <div className="console-details-page">
            <div className="console-details-container">
                <div className="console-top-container">
                    <div className="console-image-container">
                        <img className='console-image' src={consoles.img_path} alt="" />
                    </div>
                    <div className="details-section">
                        <h4 className="brand-name">{consoles.brand}</h4>
                        <h2 className="console-name">{consoles.name}</h2>
                        <h2 className="console-price"> ${consoles.price}</h2>
                        <h3 className="console-release"> Release Year: <span className="year-released">{consoles.year_released}</span></h3>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>      
    )
}