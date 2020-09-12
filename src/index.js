import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div>hello world !</div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)