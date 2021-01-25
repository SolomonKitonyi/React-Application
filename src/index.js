// Import React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';


//Creatr react component
const App = ()=>{
    return <div>Hi There!</div>
};


// Take the react component and show it on the screen
ReactDom.render(
    <App/>, 
    document.querySelector('#root')
);  