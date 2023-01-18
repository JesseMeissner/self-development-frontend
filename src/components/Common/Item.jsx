import Heart from '../../assets/img/images/heart.png';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../../ReviewContext';

function  Item ()  {
    const {value, setValue} = useContext(ReviewContext)

    const [item, setItem] = useState(null);
    const [abc, setAbc] = useState("")
    const [itemClicked, setItemClicked] = useState(0)
    const [itemSelected, setItemSelected] = useState(null)

    useEffect(() => {
        const fetchData= () => {
            axios.get('http://127.0.0.1:8000/items/').then((res) => {
                setItem(res.data.results);

            })
        }
        fetchData();
        setAbc('2')
        },[])

    function incrementItemClicked() {
        setItemClicked(itemClicked + 1)
        console.log(itemClicked)
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
                                <p className="reviews-number">{i.likes}</p>
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
                                <button className="add" onClick={incrementItemClicked}>Add +</button>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Item;