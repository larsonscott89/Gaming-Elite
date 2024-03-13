import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/ConsoleDetails.css'
import { useCart } from '../CartContext';

export default function ConsoleDetails ({ user_id }) {
    const { addToCart } = useCart();
    let { id } = useParams()
    const [accessories, setAccessories] = useState('')


    useEffect(() => {
        const getAccessories = async () => {
            const response = await axios.get(`http://localhost:3001/accessories/${id}`)
            setAccessories(response.data)
        }
        getAccessories()

    }, [id])


    const handleAddToCart = () => {
        const newItem = { id: accessories._id, img: accessories?.img_path, name: accessories.name, price: accessories.price };
        addToCart(newItem);
        alert(`${accessories.name} x1 added to cart`);
      };


    return(
        <div className="console-details-page">
            <div className="promo-container">
                <h4 className="promo-text">Save 10% When You Buy $250+ In Store or Online</h4>
            </div>
            <div className="console-details-container">
                <div className="console-top-container">
                    <div className="console-image-container">
                        <img className='accessories-image' src={accessories.img_path} alt="" />
                    </div>
                    <div className="details-section">

                        <h2 className="console-name">{accessories.name}</h2>
                        <h2 className="console-price"> ${accessories.price}</h2>
                        <h3 className="console-release"> Release Year: <span className="year-released">{accessories.year_released}</span></h3>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
