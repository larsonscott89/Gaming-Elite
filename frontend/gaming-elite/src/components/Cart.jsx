import '../style/ShoppingCart.css';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const estimatedTax = 0.1 * cartTotal; // Assuming tax rate is 10%

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Checkout functionality is not implemented yet.');
  };

  return (
    <div className='shoppingcart_container'>
      <div className='title'>
        <h1>Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cart-details'>
          <div className='UlCart'>
            {cartItems.map(item => (
              <div className='CardDetail' key={item.id}>
                 <div className='item-info'>
                <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <div>
               <div>  </div>
               <div className='itemName'>{item.name}</div> 
               <div className='itemPrice'>${item.price}</div>
               <div className='Quantity'>Quantity: {item.quantity}</div> 
               </div>
               </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className='order-summary'>
               <h2>Order Summary</h2>
                   <div className='summary-line'>
                      <p className='0'>Subtotal({totalQuantity} items) :</p>
                      <p className='1'>${cartTotal.toFixed(2)}</p>
                   </div>
                   <div className='summary-line'>
                      <p className='2'>Estimated Tax:</p>
                      <p className='3'>${estimatedTax.toFixed(2)}</p>
 
                    </div>
                    <hr></hr>
                    <div className='summary-line'>
                      <p className='4'>Estimated Total:</p>
                      <p className='5'>${(cartTotal + estimatedTax).toFixed(2)}</p>
                    </div>
                    <button className='CheckoutButton' onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                    <button className='Paypal' onClick={handleCheckout}>PayPal</button>
                    <div className='promotion-code'>
                         <input className='PromotionInput' type='text' placeholder='Enter promotion code' />
                    <button>Apply</button>
                    </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Cart;
