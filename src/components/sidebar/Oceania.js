import './Oceania.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Oceania = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="oceania_title" >
                <div className="oceania_title_text_box">
                    <h1>OCEANIA</h1>
                    <p>
                        REP1ER's OCEANIA<br />
                    </p>
                </div>
            </div>

            <div className = "oceania_grid">
                {itemDatas[9].map((oceaniaDatas) => <Item
                    key = {cnt++} 
                    _id = {oceaniaDatas._id}
                    name = {oceaniaDatas.name}
                    price = {oceaniaDatas.price}
                    img = {oceaniaDatas.img}
                    detail = {oceaniaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Oceania;