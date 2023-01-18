import { Link } from "react-router-dom"

const SelectedItemsFooter = () => {
    return (
        <section class="footer">
            <h1 class="subtotal">Subtotal: $770</h1>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1 class="go-back-home">← Go back Home</h1>
            </Link>
        </section>
    )
}

export default SelectedItemsFooter