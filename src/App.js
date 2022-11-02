import {useState} from "react"

function App() {
  const[count,setCount] = useState(0)
  return (
    <div className="App">
        <h1>hie hello</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  );
}

export default App;
