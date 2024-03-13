import '../style/ShoppingCart.css';
import { useCart } from '../CartContext';
const Cart = () => {
  const { cartItems, removeFromCart,cartTotal } = useCart();


    return (
        <div className='shoppingcart_container'>
          <div className='title'>
            <h1>Shopping Cart</h1>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id}>
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    {item.name} - ${item.price} - Quantity: {item.quantity}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className='total'>
                <p>Total: ${cartTotal}</p>
              </div>
            </div>
          )}
        </div>
      );
    };
export default Cart;
