import { useContext } from "react"
import { FilterContext } from "../../FilterContext"

const Menu = () => {
    const {filter, setFilter} = useContext(FilterContext)

    return (
        <section class="menu">
                <h1>How to order?</h1>
                <p>Thank you for loading CJ Menu by QR code. <br></br>
                Now, you can select your items below and show your order to our waiter.
                </p>
                <ul>
                    <li id="all" className="menu-button">
                        <button onClick={() => setFilter(null)}>All</button>
                    </li>
                    <li id="main-dishes" className="menu-button">
                        <button onClick={() => setFilter(5)}>MAIN DISHES</button>
                    </li>
                    <li id='kids-menus' className="menu-button">
                        <button onClick={() => setFilter(6)}>KIDS' MENUS</button>
                    </li>
                    <li id='hot-baguette' className="menu-button">
                        <button onClick={() => setFilter(7)}>HOT BAGUETTE</button>
                    </li>
                    <li id='burger-bar' className="menu-button">
                        <button onClick={() => setFilter(8)}>BURGER BAR</button>
                    </li>
                </ul>
            </section>
    )
}

export default Menu