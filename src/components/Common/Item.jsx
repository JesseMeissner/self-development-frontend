import Heart from '../../assets/img/images/heart.png';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../../ReviewContext';
import { FilterContext } from '../../FilterContext';

function  Item ()  {
    const {value, setValue} = useContext(ReviewContext);
    const {filter, setFilter} = useContext(FilterContext);

    const [item, setItem] = useState(null);
    const [cart, setCart] = useState(null);
    const [itemInCart, setItemInCart] = useState(null);
    const [itemReviews, setItemReviews] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://127.0.0.1:8000/items/').then((res) => {
                console.log(res.data.results)
                const filteredItem = res.data.results.filter(res => res.category === filter);  
                filter === null ? setItem(res.data.results) : setItem(filteredItem);
            })
        }

        const fetchReviews = () => {
            axios.get('http://127.0.0.1:8000/reviews/').then((res) => {
                setItemReviews(res.data.results);
            })
        }

        const fetchCarts = () => {
            axios.get('http://127.0.0.1:8000/carts/').then((res) => {
                setCart(res.data.results);
                console.log(res.data.results)
            })
        }

        fetchData();
        fetchReviews();
        fetchCarts();
        },[filter, itemInCart])

    const handleCartsQuantityChange = (itemID) => {
        axios.put(`http://127.0.0.1:8000/carts/${itemID}/update`, {
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            console.log(itemID);
        })
    }

    const createCart = (it) => {
        it === null ?
        console.log('item is not defined')
        : axios.post('http://127.0.0.1:8000/carts/create/', {
            item: it.id,
            quantity: 1,
        }).then((res) => {
            console.log(it.id);
        }).catch((error) => {
            console.log(error);
            console.log(it.id);
        })
    }

    const isItemInCart = (itemID, item, id) => {
        const itemInC = cart.find(c => c.item === itemID)
        setItemInCart(itemInC)
        itemInC ? handleCartsQuantityChange(id) : createCart(item)
    }

    return (
        <div className='App'>
            {itemReviews && item && item.length > 0 && item.map((i) => {
                const filteredReviews = itemReviews.filter((review) => review.item === i.id)
                const totalLikes = filteredReviews.reduce((acc, review) => acc + review.likes, 0)
                return (
                <div className='item'>
                    <div class="image-container">
                        <img class="reviews-image" src={i.image}></img>
                    </div>
                        <div className="item-details">
                            <h1>{i.name}</h1>
                            <div className="reviews">
                                <div className="reviews-icon">
                                    <img src={Heart}></img>
                                </div>
                                <p className="reviews-number"> {totalLikes} </p>
                                <div className="check-write-reviews">
                                    <Link to='/check-reviews' style={{ textDecoration: 'none' }}>
                                        <p onClick={() => setValue(i.id)} >Check Reviews</p>
                                    </Link>
                                    <Link to='/write-review' style={{ textDecoration: 'none' }}>
                                        <p onClick={() => setValue(i.id)} >Write Review</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="price-add">
                                <p className="price">${i.price}</p>
                                <button className="add" onClick={() => isItemInCart(i.id, i, i.id)}>Add +</button>
                            </div>
                        </div>
                </div>
                )
        })}
        </div>
    )}

export default Item;