import React from 'react';
import ReactDOM from 'react-dom';
import MyBlurb from './Components/MyBlurb.js';

//Initial React practice statement
//ReactDOM.render(<h1>Hello World!</h1>,document.getElementById('root'));

//UL practice segment - REACT TUTORIAL
/*
ReactDOM.render((<div>
    <ul>
        <li>Anything</li>
        <li>you</li>
        <li>want</li>
    </ul>
    </div>),document.getElementById('root'));
*/
//Functional components segment - REACT TUTORIAL
/*
function MyApp() {
    return (
    <ul>
        <li>Anything</li>
        <li>you</li>
        <li>want</li>
    </ul>
    )
}

ReactDOM.render(<MyApp />,document.getElementById('root'));
*/

//Functional components segment -- part 2 -- REACT TUTORIAL


ReactDOM.render(<MyBlurb />,document.getElementById('root'));