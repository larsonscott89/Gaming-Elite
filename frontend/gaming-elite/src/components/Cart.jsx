import  { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = '65ce2726cdfc279c20cc82d1'; // Replace with the actual user ID
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                setUser(userResponse.data);

                const shoppingCartResponse = await axios.get(`http://localhost:3001/users/${userId}/shopping-cart`);
                const cartItemsResponse = await axios.get(`http://localhost:3001/users/${userId}/shopping-cart/items`);

                setCartItems(cartItemsResponse.data);
            } catch (error) {
                console.error('Error occurred:', error);
            }
        };

        fetchData();
    }, []);

    const renderCartItems = () => {
        return cartItems.map((item) => (
            <div key={item._id}>
                <h3>{item.title}</h3>
                <p>Genre: {item.genre}</p>
                <p>Year Released: {item.year_released}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Number of Players: {item.number_of_players}</p>
                <p>Online: {item.online ? 'Yes' : 'No'}</p>
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
