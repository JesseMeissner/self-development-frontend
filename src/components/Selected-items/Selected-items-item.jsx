import axios from "axios";
import Heart from '../../assets/img/images/heart.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SelectedItem() {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        const fetchItems = () => {
            axios.get('http://127.0.0.1:8000/carts/').then((res) => {
                console.log(res.data);
                setSelected(res.data.results);
            })
        }
        
        fetchItems();
    }, [])

    return (
        <div>
            {selected && selected.length > 0 && selected.map((i) => (
                <div className='selectedItems'>
                    <div className='item'>
                        <div class="image-container">
                            <img class="reviews-image" src={i.item.image}></img>
                        </div>
                            <div className="item-details">
                                <h1>{i.item.name}</h1>
                                <div className="reviews">
                                    <div className="reviews-icon">
                                    <img src={Heart}></img>
                                    </div>
                                    <p className="reviews-number">{i.item.likes}</p>
                                    <div className="check-write-reviews">
                                        <Link to='/check-reviews' style={{ textDecoration: 'none' }}>
                                        <p>Check Reviews</p>
                                        </Link>
                                        <Link to='/write-review' style={{ textDecoration: 'none' }}>
                                            <p>Write Review</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="price-add">
                                    <p className="price">${i.item.price}</p>
                                    {i.quantity > 0 ? (
                                        <button className="add"> {i.quantity} </button>
                                    ) : <button className="add" >Add +</button>}
                                    
                                </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SelectedItem;