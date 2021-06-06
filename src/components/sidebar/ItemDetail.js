import './ItemDetail.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getProductDetails } from '../../redux/actions/ProductActions';
import { addToCart } from '../../redux/actions/CartAction';

const ItemDetail = ({ match, history }) => {

    

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    // useEffect(() => {
    //     if (product && match.params.id !== product.id) {
    //         dispatch(getProductDetails(match.params.id))
    //     }
    // }, [dispatch, product, match]); // -> 무한 렌더링

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        } 
    }, []);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen_left">
                        <div className="left_image">
                            {/* 이미지 넣으면 이거 */}
                            {/* <img src={product.imageUrl} alt={product.name}></img> */}
                            {/* <img src="http://placehold.it/320x320?text=sample" alt={product.name}></img> */}
                            {/* <img src = {require("../sidebar/images/" + product.img)} alt = {product.name}/> */}
                        </div>
                        <div className="left_info">
                            <p className="left_name">{product.name}</p>
                            <p>Price : {product.price}￦</p>
                            <p>Decription : {product.details}</p>
                        </div>
                    </div>
                    <div className="productscreen_right">
                        <div className="right_info">
                            <p>
                                Price : <span>{product.price}￦</span>
                            </p>
                            <p>
                                Status : <span>{product.count > 0 ? "In Stock" : "Out of Stock"}</span>
                            </p>
                            <p>
                                Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.count).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}> Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ItemDetail;