import  { useState, useEffect } from 'react';
import axios from 'axios';


const ShoppingCart = ({ userId, username }) => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userId) {
                    const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                    setUser(userResponse.data);

                    const shoppingCartResponse = await axios.get(`http://localhost:3001/users/${userId}/shopping-cart`);
                    setCartItems(shoppingCartResponse.data.items);
                } else {
                    setUser(null);
                    setCartItems([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId, username]);

    const renderCartItems = () => {
        return cartItems.map((item) => (
            <div key={item._id}>
                <h3>{item.title}</h3>
                <p>Genre: {item.genre}</p>
                <p>Year Released: {item.year_released}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Number of Players: {item.number_of_players}</p>
                <p>Online: {item.online }</p>
                <p>Rating: {item.rating}</p>
                <img src={item.img_path} alt={item.title} style={{ width: '100px', height: '100px' }} />
            </div>
        ));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {user && <p>Welcome, {user.username}!</p>}
            {cartItems.length > 0 ? (
                renderCartItems()
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
};

export default ShoppingCart;
