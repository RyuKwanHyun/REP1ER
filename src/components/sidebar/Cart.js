import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import CartItem from './Cartitem';

//Actions
import { addToCart, removeFromCart } from '../../redux/actions/CartAction';

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                {console.log(cartItems)}
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : cartItems.map(item => (<CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />))}
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>{getCartSubTotal()}￦</p>
                </div>
                <div className = "checkout_btn">
                    <Link to = "/payment">
                    <button>Proceed To Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart