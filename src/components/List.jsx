import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import EditToDo from './EditToDo';
import ToDoItem from './ToDoItem';

function List({ toDoList, setToDoList, edit, setEdit, addNew }) {
    const [activeToDo, setActiveToDo] = useState({})
    const [status, setStatus] = useState("wszystkie");

  return (
    <div>
        {toDoList.length > 0 ? (
            <div className="toDoList">
              <Form>
                <Form.Group>
                    <div className="filterBox">
                        <Form.Label className="filterText">Filtruj</Form.Label>
                        <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="wszystkie">Wszystkie</option>
                            <option value="niewykonane">Niewykonane</option>
                            <option value="wykonane">Wykonane</option>
                        </Form.Select>
                    </div>
                </Form.Group>
              </Form>
              <Accordion className="toDoAcordation">
                {status === "wszystkie" ? toDoList.map((toDo, i) => (
                  <ToDoItem toDo={toDo} i={i} edit={edit} setEdit={setEdit} setActiveToDo={setActiveToDo} setToDoList={setToDoList} addNew={addNew} />
                )) : toDoList.filter(toDo => toDo.status === status).map((toDo, i) => (
                    <ToDoItem toDo={toDo} i={i} edit={edit} setEdit={setEdit} setActiveToDo={setActiveToDo} setToDoList={setToDoList} addNew={addNew} />
                ))}
                {edit === true && (
                      <EditToDo toDoList={toDoList} setToDoList={setToDoList} toDo={activeToDo} setEdit={setEdit} />
                    )}
              </Accordion>
            </div>
        ) : (
            <p>Nie masz jeszcze żadnych wyjazdów</p>
        )}
    </div>
  )
}

export default List