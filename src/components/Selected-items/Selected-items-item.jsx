import axios from "axios";
import Heart from '../../assets/img/images/heart.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SelectedItem() {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        const fetchItems = () => {
            axios.get('http://127.0.0.1:8000/carts/').then((res) => {
                setSelected(res.data.results);
            })
        }
        
        fetchItems();
    }, [selected])

    const handleCartsQuantityAdd = (itemID) => {
        axios.put(`http://127.0.0.1:8000/carts/${itemID}/update`, {
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            console.log(itemID);
        })
    }

    const handleCartsQuantityDecrement = (itemID) => {
        axios.put(`http://127.0.0.1:8000/carts/${itemID}/decrement`, {
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            console.log(itemID);
        })
    }

    return (
        <div className="selected-items-item">
            {selected && selected.length > 0 && selected.map((i) => (
                <div className='selectedItems'>
                    <div className='item'>
                        <div class="image-container">
                            <img class="reviews-image" src={i.item_serialized.image}></img>
                        </div>
                            <div className="item-details">
                                <h1>{i.item_serialized.name}</h1>
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
                                    <p className="price">${i.item_serialized.price}</p>
                                    {i.quantity > 1 ? (
                                        <button className="add add_selected"> <p onClick={() => handleCartsQuantityDecrement(i.item)}>-</p> <p> {i.quantity} </p> <p onClick={() => handleCartsQuantityAdd(i.item)}>+</p> </button>
                                    ) : <button className="add" onClick={() => handleCartsQuantityAdd(i.item)}>Add +</button>}
                                    
                                </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SelectedItem;