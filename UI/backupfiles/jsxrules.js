import './App.css';
import React from 'react';
function App(){
return(
  /* <h1>hello</h1>     error because rule1 <h1>hello</h1> or
  <h2>hi!!!</h2> */
   <div>
    <h1 id="myh1">hello</h1>
    <h2>hi!!!</h2>
    {/* <hr> error */}
    {/* <hr />    correct rule3 */}
    <p>React<br />working</p>   {/*correct rule2 opening and closing brackets */}
    <p className='a'>my name is aarti</p> {/*rule4 className used*/}
    <p className='a'>Gawali</p>
    <h1 style={{"color":"green","font-size":"36px"}}>JSX working</h1>  {/*rule 5 inline css {{"":""}}*/}
   </div>
);
}
export default App;

// app.css
// #myh1{
//     color: red;
//   }
  
//   .a{
//     color:aqua;
//   }