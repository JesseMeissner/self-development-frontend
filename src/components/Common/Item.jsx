import ItemImg from '../../assets/img/images/item.png'
import Heart from '../../assets/img/images/heart.png';
import axios from 'axios';
import { useState,useEffect } from 'react';

function  Item ()  {
    const [item, setItem] = useState(null);
    const [abc, setAbc] = useState("")

    useEffect(() => {
        const fetchData= ()=>{
            axios.get('http://127.0.0.1:8000/items/').then((res) =>{
                console.log(res.data);
                setItem(res.data.results);
            })
        }
        fetchData();
        setAbc('2')
    },[])
    
    return (
        <div className='App'>
            {item && item.length > 0 && item.map((i) => (
                <div className='item'>
                    <img class="reviews-image" src={i.image}></img>
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
    )
}

export default Item;