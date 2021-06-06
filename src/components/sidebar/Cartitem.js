import './Cartitem.css'
import { Link } from 'react-router-dom'
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                {/* 이미지 넣으면 이거 */}
                {/* <img src={item.imageUrl} alt={item.name}></img> */}
                {/*<img src={require('../../images/aws.png').default} alt={item.name}></img>*/}
                {/* <img src="http://placehold.it/320x320?text=sample" alt={item.name}></img> */}
            </div>

            <Link to={`/product/${item.product}`} className="cartitem_name">
                <p>{item.name}</p>
            </Link>

            <p className="cartitem_price">{item.price}￦</p>

            <select className="cartitem_select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                ))}
            </select>
            <button className="cartitem_deleteBtn" onClick={() => removeHandler(item.product)}>
                Delete
            </button>
        </div>
    )
}

export default CartItem;