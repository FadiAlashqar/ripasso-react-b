
import { useEffect, useRef, useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // const [show, setShow] = useState(false)

  // const [users, setUsers] = useState([
  //   { id: 1, name: "Luca", age: 25 },
  //   { id: 2, name: "Anna", age: 30 }
  // ]);

  // const [newUser, setNewUser] = useState({ name: "", age: "" })

  // const timeOut = useRef(null)


  // const handleButton = () => {
  //   if (timeOut.current) {
  //     clearTimeout(timeOut.current)
  //   }

  //   setShow(true)
  //   timeOut.current = setTimeout(() => {
  //     setShow(false)
  //     setName("")
  //   }, 2000)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setUsers(prev => [...prev, { id: prev.length + 1, name: newUser.name, age: newUser.age }])
  //   setNewUser({
  //     name: "",
  //     age: ""
  //   })
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setNewUser({
  //     ...newUser,
  //     [name]: value
  //   });
  // };

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setShow(false);
      }, 2000);
    }

    return () => clearTimeout(timer)
  }, [show]);

  return (
    // <div>
    //   <h1>{count}</h1>

    //   <button onClick={() => setCount(prev => prev + 1)}>+</button>
    //   <button onClick={() => setCount(prev => prev - 1)}>-</button>
    //   <button onClick={() => setCount(0)}>Reset</button>
    // </div>
    // <div>
    //   <input type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />

    //   <button onClick={handleButton}>Saluta</button>
    //   {show && <h2>Ciao {name}!</h2>}
    // </div>
    // <div>
    //   <div className="container p-2">
    //     <div className="row">
    //       {
    //         users.map((u) => {
    //           return <div className="col-4" key={u.id}>
    //             <UserCard
    //               name={u.name}
    //               age={u.age}
    //             />
    //           </div>
    //         })
    //       }
    //       <div className="col-12 d-flex justify-content-center mt-3">
    //         <form onSubmit={handleSubmit}>
    //           <div className="d-flex justify-content-center">
    //             <span>Add a new member !</span>
    //           </div>
    //           <div className="mt-2">
    //             <input type="text" placeholder="name"
    //               value={newUser.name}
    //               name="name"
    //               onChange={handleChange}
    //             />
    //             <input type="number" placeholder="age"
    //               value={newUser.age}
    //               name="age"
    //               onChange={handleChange} />
    //           </div>
    //           <div className="mt-2 d-flex justify-content-center">
    //             <button>Submit</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div >
    <div>
      <button onClick={() => setShow(true)}>
        Mostra messaggio
      </button>
      {show && <h2>Ciao!</h2>}
    </div>
  );
}

export default App;