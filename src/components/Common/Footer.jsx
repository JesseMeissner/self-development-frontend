import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import axios from 'axios'
import { TotalContext } from '../../TotalContext.js'

const Footer = () => {
    const {total, setTotal} = useContext(TotalContext)

    const [cart, setCart] = useState(null)

    useEffect(() => {
        const fetchCarts = () => {
            axios.get('http://127.0.0.1:8000/carts/').then((res) => {
                setCart(res.data.results);
                setTotal(res.data.results.reduce((acc, cur) => acc + cur.item.price * cur.quantity, 0));
            })
        }
        fetchCarts()
    }, [cart])

    return (
            <section class="footer">
                <h1 class="subtotal">Subtotal: ${total}</h1>
                <Link to='/selected-items' style={{textDecoration: 'none'}}>
                    <button>Check selected items</button>
                </Link>
            </section>
    )
}

export default Footer