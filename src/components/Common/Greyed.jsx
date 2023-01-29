import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import HeaderImg from '../../assets/img/images/headerimg.png';
import Heart from '../../assets/img/images/heart.png';
import { FilterContext } from '../../FilterContext';

export const Greyed = () => {
    const {filter, setFilter} = useContext(FilterContext)
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData= () => {
            axios.get('http://127.0.0.1:8000/items/').then((res) =>{
                const filteredItem = res.data.results.filter(res => res.category === filter);  
                filter === null ? setItem(res.data.results) : setItem(filteredItem);
            })
        }
        fetchData();
        },[])

    return (
        <div className="greyed">
            <section className="header">
                <img src={HeaderImg} alt='header'></img>
            </section>

            <section className="menu">
                <h1>How to order?</h1>
                <p>Thank you for loading CJ Menu by QR code. <br></br>
                Now, you can select your items below and show your order to our waiter.
                </p>
                <ul>
                    <li id="all" className="menu-button">
                        <button>All</button>
                    </li>
                    <li id="main-dishes" className="menu-button">
                        <button>MAIN DISHES</button>
                    </li>
                    <li id='kids-menus' className="menu-button">
                        <button>KIDS' MENUS</button>
                    </li>
                    <li id='hot-baguette' className="menu-button">
                        <button>HOT BAGUETTE</button>
                    </li>
                    <li id='burger-bar' className="menu-button">
                        <button>BURGER BAR</button>
                    </li>
                </ul>
            </section>

            <div className='App'>
            {item && item.length > 0 && item.map((i) => (
                <div key={i.name} className='item'>
                    <div className="image-container">
                        <img className="reviews-image" src={i.image}></img>
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
                                    <button className="add" style={{backgroundColor: '#ccc'}}>Add +</button>
                                </div>
                            </div>
                </div>
            ))}
            </div>
        </div>
    )}