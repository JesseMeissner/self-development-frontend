import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderImg from '../../assets/img/images/headerimg.png';
import Heart from '../../assets/img/images/heart.png';

export const Greyed = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData= () => {
            axios.get('http://127.0.0.1:8000/items/').then((res) =>{
                console.log(res.data);
                setItem(res.data.results);

            })
        }
        fetchData();
        },[])

    return (
        <div class="greyed">
            <section class="header">
                <img src={HeaderImg} alt='header'></img>
            </section>

            <section class="menu">
                <h1>How to order?</h1>
                <p>Thank you for loading CJ Menu by QR code. <br></br>
                Now, you can select your items below and show your order to our waiter.
                </p>
                <ul>
                    <li id="all">
                        <button>All</button>
                    </li>
                    <li>
                        <button>MAIN DISHES</button>
                    </li>
                    <li>
                        <button>KIDS' MENUS</button>
                    </li>
                    <li>
                        <button>HOT BAGUETTE</button>
                    </li>
                    <li>
                        <button>BURGER BAR</button>
                    </li>
                </ul>
            </section>

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
                                    <p className="reviews-number">{i.likes}</p>
                                    <div className="check-write-reviews">
                                            <p>Check Reviews</p>
                                            <p>Write Review</p>
                                    </div>
                                </div>
                                <div className="price-add">
                                    <p className="price">${i.price}</p>
                                    <button className="add">Add +</button>
                                </div>
                            </div>
                </div>
            ))}
            </div>
        </div>
    )}