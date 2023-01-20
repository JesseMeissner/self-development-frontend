import './assets/styles/home.css';
import Router from './Router';
import { ReviewContext } from './ReviewContext';
import { TotalContext } from './TotalContext'
import { FilterContext } from './FilterContext'
import { useState } from 'react';


function App() {
    const [value, setValue] = useState(null)
    const [filter, setFilter] = useState(null)
    const [total, setTotal] = useState(null)

    return(
        <div>
            <ReviewContext.Provider value={{value, setValue}}>
            <FilterContext.Provider value={{filter, setFilter}}>
            <TotalContext.Provider value={{total, setTotal}}>
                <Router />
            </TotalContext.Provider>
            </FilterContext.Provider>
            </ReviewContext.Provider>
            
        </div>
    )
}

export default App;
