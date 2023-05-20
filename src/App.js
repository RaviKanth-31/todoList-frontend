import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])


  return (
    <div className="App">

      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          ravi = {item.ravi}
          prem = {item.prem}
          updateP = {(prem) => updateToDo(item._id, setToDo, setText, setIsUpdating, prem, item.ravi)}
          updateR = {(ravi) => updateToDo(item._id, setToDo, setText, setIsUpdating, item.prem, ravi)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}
        </div>

      </div>

    </div>
  );
}

export default App;
