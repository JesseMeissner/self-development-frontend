import Header from "../components/Common/Header"
import SelectedItem from "../components/Selected-items/Selected-items-item"
import SelectedItemsFooter from "../components/Selected-items/selected-items-footer"
import SelectedItemsMenu from "../components/Selected-items/selected-items-menu"

const SelectedItems = () => {
    return (
        <body>
            <Header />
            <SelectedItemsMenu />
            <SelectedItem />
            <SelectedItemsFooter />
        </body>
    )
}

export default SelectedItems