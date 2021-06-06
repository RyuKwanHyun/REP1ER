import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({ imageUrl, name, price, description, productId }) => {

    return (
        <div className="product">
            {/* 나중에 밑에 이미지 추가 */}
            {/* <img src={imageUrl} alt={name}></img> */}
            <img src="http://placehold.it/100x100?text=sample" alt={name}></img>
            <div className="product_info">
                <p className="info_name">{name}</p>
                {/* description 뭐 넣을지... 일단은 이름으로 대체*/}
                <p className="info_description">{name.substring(0, 100)}...</p>

                <p className="info_price">{price}원</p>
                <Link to={`/product/${productId}`} className="info_button">View</Link>
            </div>
        </div>
    )
}

export default Product;