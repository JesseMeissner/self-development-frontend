import axios from "axios";
import Heart from '../../assets/img/images/heart.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SelectedItem() {
    const [selected, setSelected] = useState(null)
    const [itemReviews, setItemReviews] = useState(null)

    useEffect(() => {
        const fetchItems = () => {
            axios.get('https://self-development-backend.jessemeissner1.repl.co/carts/').then((res) => {
                setSelected(res.data.results);
            })
        }

        const fetchReviews = () => {
            axios.get('https://self-development-backend.jessemeissner1.repl.co/reviews/').then((res) => {
                setItemReviews(res.data.results);
            })
        }
        
        fetchItems();
        fetchReviews();
    }, [selected])

    const handleCartsQuantityAdd = (itemID) => {
        axios.put(`https://self-development-backend.jessemeissner1.repl.co/carts/${itemID}/update`, {
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            console.log(itemID);
        })
    }

    const handleCartsQuantityDecrement = (itemID) => {
        axios.put(`https://self-development-backend.jessemeissner1.repl.co/carts/${itemID}/decrement`, {
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            console.log(itemID);
        })
    }

    return (
        <div className="selected-items-item">
            {selected && selected.length > 0 && selected.map((i) => {
                const filteredReviews = itemReviews && itemReviews.filter((review) => review.item === i.item_serialized.id)
                const totalLikes = filteredReviews && filteredReviews.reduce((acc, review) => acc + review.likes, 0)
                return (
                <div key={i.item} className='selectedItems'>
                    <div className='item'>
                        <div className="image-container">
                            <img className="reviews-image" src={i.item_serialized.image}></img>
                        </div>
                            <div className="item-details">
                                <h1>{i.item_serialized.name}</h1>
                                <div className="reviews">
                                    <div className="reviews-icon">
                                    <img src={Heart}></img>
                                    </div>
                                    <p className="reviews-number">{totalLikes}</p>
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
            )}
            )}
        </div>
    )
}

export default SelectedItem;