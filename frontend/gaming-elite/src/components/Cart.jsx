import { useState } from 'react';

const ShoppingCart = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const totalItems = cartItems.length;

    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>User ID: {userId}</p>
            <p>Total Items: {totalItems}</p>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
