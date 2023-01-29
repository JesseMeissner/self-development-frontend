import Header from "../components/Common/Header"
import SelectedItem from "../components/Selected-items/Selected-items-item"
import SelectedItemsFooter from "../components/Selected-items/selected-items-footer"
import SelectedItemsMenu from "../components/Selected-items/selected-items-menu"

const SelectedItems = () => {
    return (
        <div>
            <Header />
            <SelectedItemsMenu />
            <SelectedItem />
            <SelectedItemsFooter />
        </div>
    )
}

export default SelectedItems