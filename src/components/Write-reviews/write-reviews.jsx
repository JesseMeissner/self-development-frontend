import good from '../../assets/img/images/good.png';
import veryGood from '../../assets/img/images/very-good.png';
import excellent from '../../assets/img/images/excellent.png';
import notGood from '../../assets/img/images/not-good.png';
import x from '../../assets/img/images/x.png';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios'
import { useContext } from 'react';
import { ReviewContext } from '../../ReviewContext';
import { useState } from 'react';

const WriteReview = () => {
    const {value, setValue} = useContext(ReviewContext)
    const [name, setName] = useState('')
    const [reviewText, setReviewText] = useState('')
    const [reviewLikes, setReviewLikes] = useState(0)

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleReview = (event) => {
        setReviewText(event.target.value)
    }

    const handleSubmit = (event) => {
        axios.post('http://127.0.0.1:8000/reviews/create/', {
            name: name,
            review: reviewText,
            likes: reviewLikes,
            item: value,
        })
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div class="prompt-box">
            <form onSubmit={handleSubmit}>
                <Link to="/">
                    <img class="x" src={x} />
                </Link>
                <h1>Write Review</h1>
                <p>Choose your thought</p>
                <div class="prompt-buttons">
                    <button onClick={() => setReviewLikes(1)}> <img src={good} /> </button>
                    <button onClick={() => setReviewLikes(2)}> <img src={veryGood} /> </button>
                    <button onClick={() => setReviewLikes(3)}> <img src={excellent} /> </button>
                    <button onClick={() => setReviewLikes(0)}> <img src={notGood} /> </button>
                </div>
                <input type="text" id="name" name="name" value={name} onChange={handleName} placeholder="Enter your name"></input>
                <textarea id="review-text" name="review-text" value={reviewText} onChange={handleReview} placeholder="Enter your review"></textarea>
                <input type="submit" id="review-submit" value="Send Review"></input>
            </form>
        </div>
)}

export default WriteReview