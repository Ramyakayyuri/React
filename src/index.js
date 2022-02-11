// import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';




// create a react component
const App = () => {
    const buttonText = {text : 'Click Me'};
    return(
         <div>
             <label className="label" htmlFor="name">Enter name:</label>
             <input id="name" type="text"/>
             <button style={{backgroundColor: 'yellow', color: 'white'}}>{buttonText.text}</button>
         </div>
        );
};

// take the react component and show it on the screen
ReactDom.render(<App/>,document.querySelector('#root'));
