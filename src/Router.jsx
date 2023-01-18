import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import WriteReview from './containers/Write-review'
import CheckReviews from './containers/Check-reviews'
import SelectedItems from './containers/Selected-items'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='write-review' element={<WriteReview />} />
            <Route path='check-reviews' element={<CheckReviews />} />
            <Route path='selected-items' element={<SelectedItems />} />
        </Routes>
    );
};
export default Router;
