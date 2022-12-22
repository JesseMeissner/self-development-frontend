import ItemImg from '../../assets/img/images/item.png'
import Heart from '../../assets/img/images/heart.png';

const Item = () => {
    return (
        <section class="items">
                <ul>
                    <li>
                        <div class="item">
                            <img class="reviews-image" src={ItemImg}></img>
                            <div class="item-details">
                                <h1>Chicken Makhani Burst + Lite</h1>
                                <div class="reviews">
                                    <div class="reviews-icon">
                                    <img src={Heart}></img>
                                    </div>
                                    <p class="reviews-number">(16)</p>
                                    <div class="check-write-reviews">
                                        <p>Check Reviews</p>
                                        <p>Write Review</p>
                                    </div>
                                </div>
                                <div class="price-add">
                                    <p class="price">$16</p>
                                    <button class="add">Add +</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </section>
    )
}

export default Item