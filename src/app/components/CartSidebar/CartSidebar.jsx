import { useSelector, useDispatch } from 'react-redux';
import './CartSidebar.scss';
import { ImCross } from "react-icons/im";
import {
  getCartItems,
  getSubtotal,
} from '../../redux/cart/selectors';

import {
  removeFromCart,
  increment,
  decrement
} from '../../redux/cart/slice';

function CartSidebar() {

  const dispatch = useDispatch();

  const cartItems = useSelector(getCartItems);

  const subtotal = useSelector(getSubtotal);

  return (
    <div className="cart-sidebar">

      <div className="cart-header">

        <div>
          <p className="cart-label">CART</p>

          <h2>
            {cartItems.length} item
            {cartItems.length > 1 ? 's' : ''}
          </h2>
        </div>

      </div>

      <div className="cart-items">

        {cartItems.map((item) => {
          const imageUrl = `/assets/images/${item.sku}.jpg`;

          return (

            <div
              key={item.id}
              className="cart-item"
            >

              <img
                src={imageUrl}
                alt={item.title}
              />

              <div className="cart-item-details">

                <p className="cart-item-title">
                  {item.title}
                </p>

                <div className="cart-item-bottom">

                  <span className="cart-item-price">
                    $ {item.price}
                  </span>

                  <span className="cart-item-quantity">
                    Quantity : {item.quantity}
                  </span>

                </div>

              </div>

              <button
                className="remove-btn"
                type="button"
                onClick={() =>
                  dispatch(
                    removeFromCart(item.id)
                  )
                }
              >
                <ImCross />
              </button>
              <button onClick={()=> dispatch(increment(item.id))}> plus </button>
               <button onClick={()=> dispatch(decrement(item.id))}> minus </button>
            </div>
          );
        })}

      </div>

      <div className="cart-footer">

        <div className="subtotal-row">

          <span>Subtotal</span>

          <strong>
            $ {subtotal.toFixed(2)}
          </strong>

        </div>

        <button className="checkout-btn">
          Checkout
        </button>

      </div>

    </div>
  );
}

export default CartSidebar;