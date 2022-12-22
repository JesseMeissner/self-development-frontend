import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Home1 from './containers/Home1';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
        </Routes>
    );
};
export default Router;
