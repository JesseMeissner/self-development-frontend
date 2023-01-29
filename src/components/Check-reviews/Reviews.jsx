import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import X from '../../assets/img/images/x.png';
import notGood from '../../assets/img/images/not-good.png';
import good from '../../assets/img/images/good.png';
import veryGood from '../../assets/img/images/very-good.png';
import excellent from '../../assets/img/images/excellent.png';
import axios from 'axios';
import { ReviewContext } from '../../ReviewContext';

function Reviews() {
    const {value, setValue} = useContext(ReviewContext)
    const [reviews, setReviews] = useState(null)
    const [specificItem, setSpecificItem] = useState(null)

    useEffect(() => {
        const fetchReviews = () => {
            axios.get('http://127.0.0.1:8000/reviews/').then((res) => {
                const filteredResults = res.data.results.filter(res => res.item === value);
                setReviews(filteredResults);
                console.log(filteredResults);
            })
        }

        const fetchItems = () => {
            axios.get('http://127.0.0.1:8000/items/').then((res) => {
                const filteredItem = res.data.results.filter(res => res.id === value)
                setSpecificItem(filteredItem[0]);
                console.log(specificItem);
            })
        }

        fetchReviews();
        fetchItems();
    }, []) // , [reviews])

    return (
        <div className="prompt-box">
            <Link to='/'>
                <img className="x" src={X}></img>
            </Link>
            <h1>Reviews for "{specificItem ? specificItem.name : 'Loading...'}"</h1>
            <div className="review">
                {reviews && reviews.length > 0 && reviews.map((review) => (
                    <div key={review.name} className="review-specific">
                        {review.likes === 0 && <img src={notGood}></img>}
                        {review.likes === 1 && <img src={good}></img>}
                        {review.likes === 2 && <img src={veryGood}></img>}
                        {review.likes === 3 && <img src={excellent}></img>}
                        <h2 className="review-name"> {review.name} </h2>
                        <p className="review-review"> {review.review} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews