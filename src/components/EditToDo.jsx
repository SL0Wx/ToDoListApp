import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';

function EditToDo({ toDoList, setToDoList, toDo, setEdit }) {
    const [title, setTitle] = useState(toDo.title);
    const [description, setDescription] = useState(toDo.description);
    const [startDate, setStartDate] = useState(toDo.startDate);
    const [endDate, setEndDate] = useState(toDo.endDate);
    const [status, setStatus] = useState(toDo.status);
    const [errorMsg, setErrorMsg] = useState("");

    function handleEditToDo(e) {
        if (title === "" || description === "" || startDate === "") {
            setErrorMsg("Wypełnij wszystkie pola!");
        } else {
            e.preventDefault();
            let toDos = toDoList;
            toDo.title = title;
            toDo.description = description;
            toDo.startDate = startDate;
            toDo.endDate = endDate;
            toDo.status = status;
            toDos[toDos.findIndex((t) => t === toDo.id)] = toDo;
            setToDoList(toDos);
            setEdit(false);   
        }
    }

    return (
        <div className="editToDoForm">
            <CloseButton className="closeBtn" onClick={() => setEdit(false)} />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Tytuł</Form.Label>
                    <Form.Control type="text" placeholder="Tytuł zadania" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control type="text" placeholder="Opis zadania" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStartDate">
                    <Form.Label>Data rozpoczęcia</Form.Label>
                    <Form.Control type="date" name="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEndDate">
                    <Form.Label>Data zakończenia</Form.Label>
                    <Form.Control type="date" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="niewykonane">Niewykonane</option>
                        <option value="wykonane">Wykonane</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" onClick={handleEditToDo}>
                    Edytuj
                </Button>
                <span className="errorValidation">{errorMsg}</span>
            </Form>
        </div>
  )
}

export default EditToDo