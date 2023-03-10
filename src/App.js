import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

//search bar on a list
function App(){

  const [state, setState] = useState("");

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const result = list.filter(searchResult);

function searchResult(item) {
  item= item.toLowerCase();
  //state = state.toLowerCase();
  if(item.includes(state))
  return item;
}

  return (
    <>
 <form>    
   <label>Search for:      
     <input       
       type="text"   
       value={state}    
      onChange={(e) => setState(e.target.value)}    
        />    
          </label>   
       </form> 

       <div>
       {list.map((item) => <p>{item}</p>)}
       </div>
       <div>{result && result.map((item) => <p>{item}</p>)}</div>
</>
    )

}

export default App;




/*

//COUNTER - povecavamo i smanjujemo nas broj za jedan kad kliknemo dugme
function App(){
  //const [num1, incr] = useState(0);
  //const [num2, decr] = useState(0);
  const [state, setState] = useState(0);

  return (
    <>
   <button onClick = {() => setState(state +1)}> Incr </button>
    <div>{state} </div>
    <button onClick = {() => setState(state -1)}> Decr </button>

    </>)
}





//Show entire Child component content inside Parent component.
...child component
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}
//i onda ovde odredis da je ta child component
function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}



//UPDATE PARENT FROM CHILD - onda je export Parent componenta, a u index.js je
//import Parent from './App';   i ovo:
//<React.StrictMode>
 //   <Parent />
//  </React.StrictMode>

function Child({setValueCh}){
  return(
    <div>
       <button onClick={() => setValueCh("Parent has been updated!")}>Click child
       </button>
    </div>
    )
}

function Parent(){
  const[value, setValue] = useState("Update me.");

  return(
    <>
  <div>Parent
      <div>{value}</div>
  </div>

  <div >
        <Child setValueCh={setValue} />
      </div>
      </>
  )
}
export default Parent;




//2 WAY DATA BINDING - PRIKAZI ONO STO SE PISE U INPUTU, NA DIVU
function App(){
  const [state, setState] = useState("");

//<button disabled={value.length < 1}>Submit</button> - dugme nije u upotrebi ako 
//nis ne pise u inputu

  return(
    <>
    <input 
    type= "text"
    placeholder = "Enter text"
    value={state}
    onChange={(e) => setState(e.target.value)}
     />
    <div>{state} </div>
    </>
    );
}



//PROKAZI I SAKRIJ DIV - TOGGLE
function App(){
  const [state, setState] = useState(true);
  //  ... => setState(state = !state) - ako ovako stavis, onda ne da da menjas vrednost
  //konstanti
  const handleToggle = () => setState(!state);
      
//{state? "Hide" : "Show"}
  return (
    <>
    <button onClick = {handleToggle}>Click</button>
    {state &&  <div>Toggle this</div> }
    </>
    );

}



// SHOW AN ARRAY OF CUSTOMERS IN BROWSER
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>{userItems}</ul>
    </>
  );
}



//WRITE SOMETING WITH JSX
function App() {
  return(
    <h1> JSX is cool</h1>
    )
}


//USESTATE
const [state, setState] = useState({ age: 19, siblingsNum: 4 })
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
  // !!! ako ne stavim ovo, age i siblingNum je not defined
    //ovde pristupas obektu, gore je inicijalizacija
    const { age, siblingsNum } = state

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  )




//USESTATE
//const [count] = () => {
const [count, setAge] = useState(19);
//setAge ide sa () a ne sa {}, zato sto samo uzima argumente
const handleClick = () => setAge(count + 1);
  return (
    <div>Today my age is {count} years of age
    <div>
      <button onClick = {handleClick} > Click </button>
      </div>
      </div>
    );


*/