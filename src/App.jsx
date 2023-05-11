import { useState } from 'react';
import List from './components/List';
import NewToDo from './components/NewToDo';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <div className="overlay" style={{ display: (addNew || edit) ? "block" : "none" }}></div>
      <div className="container">
        <h1>Twoja lista zadań</h1>
        <List toDoList={toDoList} setToDoList={setToDoList} edit={edit} setEdit={setEdit} addNew={addNew} />
        <Button variant="success" className="addBtn" onClick={() => setAddNew(true)}>Utwórz nowe zadanie</Button>
        {addNew === true && (
          <NewToDo setAddNew={setAddNew} toDoList={toDoList} setToDoList={setToDoList} id={id} setId={setId} />
        )}
      </div>
    </div>
  )
}

export default App
