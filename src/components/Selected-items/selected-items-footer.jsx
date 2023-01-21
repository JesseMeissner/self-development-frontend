import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import axios from "axios"
import { TotalContext } from '../../TotalContext.js'
import { useState } from "react"

const SelectedItemsFooter = () => {
    const {total, setTotal} = useContext(TotalContext);
    const [cart, setCart] = useState(null);

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
            <h1 className="subtotal">Subtotal: ${total}</h1>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1 className="go-back-home">← Go back Home</h1>
            </Link>
        </section>
    )
}

export default SelectedItemsFooter