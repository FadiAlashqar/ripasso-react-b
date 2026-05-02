
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false)

  const handleButton = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
      setName("")
    }, 2000)
  }

  return (
    // <div>
    //   <h1>{count}</h1>

    //   <button onClick={() => setCount(prev => prev + 1)}>+</button>
    //   <button onClick={() => setCount(prev => prev - 1)}>-</button>
    //   <button onClick={() => setCount(0)}>Reset</button>
    // </div>
    <div>
      <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleButton}>Saluta</button>
      {show && <h2>Ciao {name}!</h2>}
    </div>
  );
}

export default App;