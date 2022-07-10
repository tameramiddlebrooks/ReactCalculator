import React, {useState} from 'react';
/* ^useState is the initial state I used so I could keep track
 of my data
*/
import './App.css';
import './style.css'

function App() {

  /* I have two state variables where my output will be stored
  (set to 0 because the output will always be a number)
  as well as the text variable 
  (set to an empty value because
  this is where the user input will be and has no set value) */

  const [output ,setOutput]=useState(0);
  const [text, setText]=useState('');

  

/* this clear function will serve as my reset button
so when the clear button is pressed the output will be 
set back to it's inital value of 0  */
 
function Clear(){
    setOutput(0)
  }

  /*my subtraction function where the number the user 
  inputs as text
   will be subtracted from the output */

  function Subtraction() {
    
    setOutput(Number(output)-Number(text));
    }

  /* my addition function serves the same purpose. ^
  only difference being the number that the user inputs as text 
  is added to the output */
  
  function Addition() {
  setOutput(Number(output)+Number(text));
    }

    /* my valueUpdate function is self explanatory,
    its' an event that will take place using the
    onChange property, updating the text/value
     when the user inputs a number.  */


     function Division () {
      setOutput(Number(output)/Number(text));
     }

     function Multiplication() {
      setOutput(Number(output)*Number(text));
     }


    function valueUpdate(event){
     setText(event.target.value);
    }
 
    return (
      <div className = "container">
      <h2>Add and Subtract With React!</h2>
      <div id="userInput">
      <input type="Number" placeholder="Enter a value!" onChange={valueUpdate} value={text}/>
      </div>

{/* I went with number as my input type instead to prevent
any errors from the user inputting something that's not a # */}
   
      <div id = "buttons">
      <button onClick={Addition}>Add</button>
      <button onClick={Clear}>Clear</button>
      <button  onClick={Subtraction}>Subtract</button>
      <button onClick={Division}>Division</button>
      <button onClick={Multiplication}>Multiplication</button>
      </div>

        <div id ="displayResults">
          <span>
            Results go here! :
            </span>
            <div id="Result">{output} </div>
            </div>
          </div>
    );
  }
  export default App;
// export default App;


