import './assets/styles/home.css';
import Router from './Router';
import { ReviewContext } from './ReviewContext';
import { useState } from 'react';


function App() {
    const [value, setValue] = useState(null)

    return(
        <div>
            <ReviewContext.Provider value={{value, setValue}}>
                <Router />
            </ReviewContext.Provider>
        </div>
    )
}

export default App;
