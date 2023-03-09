import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function ToDoItem({ toDo, i, setEdit, setActiveToDo, setToDoList }) {
  return (
    <Accordion.Item eventKey={i}>
        <Accordion.Header>
            <div className="acordationHeader">
                <span>{toDo.title}</span>
                <span style={{ color: toDo.status === "wykonane" ? "green" : "red" }}><b>{toDo.status}</b></span>
            </div>
         </Accordion.Header>
        <Accordion.Body>
            <p>
                <b>Opis:</b><br />
                {toDo.description}
            </p>
            <p><b>Data rozpoczęcia: {new Date(toDo.startDate).toLocaleDateString()}</b></p>
            <p><b>Data zakończenia: {toDo.endDate !== "" ? new Date(toDo.endDate).toLocaleDateString() : "brak"}</b></p>                     
            <div className="manageButtons">
                <Button variant="success" className="editBtn" onClick={() => { setEdit(true); setActiveToDo(toDo) }}>Edytuj</Button>
                <Button variant="danger" className="deleteBtn" onClick={() => {setToDoList((toDoList) => toDoList.filter((t) => t.id !== toDo.id))}}>Usuń</Button>
            </div>
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default ToDoItem