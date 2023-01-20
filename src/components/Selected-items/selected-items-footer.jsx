import { Link } from "react-router-dom"
import { useContext } from "react"
import { TotalContext } from '../../TotalContext.js'

const SelectedItemsFooter = () => {
    const {total, setTotal} = useContext(TotalContext)

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