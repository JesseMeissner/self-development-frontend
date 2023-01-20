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
    const [abc, setAbc] = useState("");
    const [itemClicked, setItemClicked] = useState(0);
    const [itemReviews, setItemReviews] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://127.0.0.1:8000/items/').then((res) => {
                const filteredItem = res.data.results.filter(res => res.category === filter);  
                filter === null ? setItem(res.data.results) : setItem(filteredItem);
            })
        }

        const fetchReviews = () => {
            axios.get('http://127.0.0.1:8000/reviews/').then((res) => {
                setItemReviews(res.data.results);
            })
        }

        fetchData();
        fetchReviews();
        setAbc('2');
        },[filter])
    
    const handleCartsQuantityChange = (itemID) => {
        axios.put(`http://127.0.0.1:8000/carts/update/${itemID}/`, {
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            console.log(itemID);
        })
    }

    const createCart = () => {
        axios.post('http://127.0.0.1:8000/carts/create/', {
            quantity: 1
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <div className='App'>
            {item && item.length > 0 && item.map((i) => (
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
                                <p className="reviews-number"> {i.likes} </p>
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
                                <button className="add" onClick={() => handleCartsQuantityChange(i.id)}>Add +</button>
                                <button onClick={() => createCart()}></button>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Item;