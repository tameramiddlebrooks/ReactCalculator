// import React, {useState, useEffect} from 'react';
//useState is the initial state I used so I could keep track of my data

// function App() {
//   const [currentResults,setCurrentResults]=useState(0);
//   const [subtractionResults, setSubtractionResults]=useState("")
//   const [clear,setClear]=useState(false);


//   useEffect(()=>{
//     document.querySelector('#result').value="";
//   },[])
  
//   useEffect(()=>{
//     if(clear)
//     document.querySelector('#result').value="";
//   })

//   const Add=(e)=>{
//     e.preventDefault();
//     if(clear) setClear(false);
//     let currentNum=document.querySelector('#num').value
//     if(currentNum==='')
//     return;
//     let results= currentResults+parseInt(currentNum);
//     setCurrentResults(results);
//     document.querySelector('#num').value="";
      
//   }
//   const Subtract=(e)=>{
//     e.preventDefault();
//     if(clear) setClear(false);
//     let currentNum=document.querySelector('#num').value
//     if(currentNum==='')
//     return;
//     let newResults= subtractionResults-parseInt(currentNum);
//     setSubtractionResults(newResults);
//     document.querySelector('#num').value="";
      
//   }


//   const Clear=(e)=>{
//     e.preventDefault();
//     console.log('results:', currentResults);
//     document.querySelector('form').reset();
//     setClear(true);
//    currentResults(0);
//   }
//   return (
//     <div className="App">
//       <div className="title">
//         <h1> Add With React!</h1>
//       </div>
//       <button onClick={Add}>Add</button>
//       <button onClick={Clear}>Clear</button>
//       <button onClick={Subtract}>Subtract</button>
//       <form className ="add">   
//       <input type="text" id="result" value={currentResults}  readOnly />   
//             <input type="text" id="num" placeholder="Enter a value" />
//                 <h3>Addition results go here!</h3>
// </form>

//                 <button onClick={Subtract}>Subtract</button>
//       <button onClick={Clear}>Clear</button>
//       <form className ="subtract">   
//       <input type="text" id="result" />   
//             <input type="text" id="num" placeholder="Enter a value" />
//             <input type="text" id="num" placeholder="Enter a value" />
//                 <h3>Subtraction results go here!</h3>


//       </form>
//     </div>
//   );
// }