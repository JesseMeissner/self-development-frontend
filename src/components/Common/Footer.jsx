import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const Footer = () => {
    const [cart, setCart] = useState(null)

    useEffect(() => {
        const fetchCarts = () => {
            axios.get('http://127.0.0.1:8000/carts/').then((res) => {
                console.log(res.data);
                setCart(res.data.results);
            })
        }
        fetchCarts()
    }, [])

    return (
        <section class="footer">
            <h1 class="subtotal">Subtotal: $770</h1>
            <Link to='/selected-items' style={{textDecoration: 'none'}}>
                <button>Check selected items</button>
            </Link>
        </section>
    )
}

export default Footer