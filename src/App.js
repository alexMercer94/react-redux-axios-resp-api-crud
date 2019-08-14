import React from 'react';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <p>CRUD</p>
        </Provider>
    );
}

export default App;
