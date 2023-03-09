import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';

function NewToDo({ setAddNew, toDoList, setToDoList, id, setId }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function handleAddToDo(e) {
        if (title === "" || description === "" || startDate === "") {
            setErrorMsg("Wypełnij wszystkie pola!");
        } else {
            e.preventDefault();
            let newToDo = {
                id,
                title,
                description,
                startDate,
                endDate,
                status: "niewykonane",
            }
            setToDoList([...toDoList, newToDo]);
            setId(id + 1);
            setAddNew(false);
        }
    }

    return (
        <>
            <div className="newToDoForm">
                <CloseButton className="closeBtn" onClick={() => setAddNew(false)} />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Tytuł</Form.Label>
                        <Form.Control type="text" placeholder="Tytuł zadania" name="title" onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Opis</Form.Label>
                        <Form.Control type="text" placeholder="opis zadania" name="description" onChange={e => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicStartDate">
                        <Form.Label>Data rozpoczęcia</Form.Label>
                        <Form.Control type="date" name="startDate" onChange={e => setStartDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEndDate">
                        <Form.Label>Data zakończenia</Form.Label>
                        <Form.Control type="date" name="endDate" onChange={e => setEndDate(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" onClick={handleAddToDo}>
                        Stwórz
                    </Button>
                    <span className="errorValidation">{errorMsg}</span>
                </Form>
            </div>
        </>
    )
}

export default NewToDo