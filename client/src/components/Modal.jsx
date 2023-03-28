import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import React, { useState, useEffect } from "react";
//import { Button, Form } from "react-bootstrap";
import { Form } from "react-bootstrap";

const ModalComponent = ({ onSaveStudent, editingStudent, onUpdateStudent }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [student, setStudent] = useState(
		editingStudent || {
			firstname: "",
			lastname: "",
			is_current: false,
			email: "",
			phone: "",
			notes: "",
		}
	);

	//create functions that handle the event of the user typing into the form
	const handleNameChange = (event) => {
		const firstname = event.target.value;
		setStudent((student) => ({ ...student, firstname }));
	};

	const handleLastnameChange = (event) => {
		const lastname = event.target.value;
		setStudent((student) => ({ ...student, lastname }));
	};

	const handleCheckChange = (event) => {
		const is_current = event.target.checked;
		//console.log(iscurrent);
		setStudent((student) => ({ ...student, is_current }));
	};
	const handleEmailChange = (event) => {
		const email = event.target.value;
		setStudent((student) => ({ ...student, email }));
	};
	const handlePhoneChange = (event) => {
		const phone = event.target.value;
		setStudent((student) => ({ ...student, phone }));
	};

	const handleNotesChange = (event) => {
		const notes = event.target.value;
		setStudent((student) => ({ ...student, notes }));
	};

	const clearForm = () => {
		setStudent({
			firstname: "",
			lastname: "",
			is_current: false,
			email: "",
			phone: "",
			notes: "",
		});
	};

	//A function to handle the post request
	const postStudent = (newStudent) => {
		return fetch("http://localhost:8080/api/students", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newStudent),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				//console.log("From the post ", data);
				//I'm sending data to the List of Students (the parent) for updating the list
				onSaveStudent(data);
				//this line just for cleaning the form
				clearForm();
			});
	};

	//A function to handle the post request
	const putStudent = (toEditStudent) => {
		return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(toEditStudent),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				onUpdateStudent(data);
				//this line just for cleaning the form
				clearForm();
			});
	};

	//A function to handle the submit in both cases - Post and Put request!
	const handleSubmit = (e) => {
		e.preventDefault();
		if (student.id) {
			putStudent(student);
		} else {
			postStudent(student);
		}
	};
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Add a new contact
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="form-students" onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<input
								type="text"
								id="add-user-name"
								placeholder="First Name"
								required
								value={student.firstname}
								onChange={handleNameChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<input
								type="text"
								id="add-user-lastname"
								placeholder="Last Name"
								required
								value={student.lastname}
								onChange={handleLastnameChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<input
								type="text"
								id="add-user-email"
								placeholder="Email Address"
								required
								value={student.email}
								onChange={handleEmailChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Phone Number</Form.Label>
							<input
								type="text"
								id="add-user-phone-number"
								placeholder="Phone Number"
								required
								value={student.phone}
								onChange={handlePhoneChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Notes</Form.Label>
							<input
								type="text"
								id="add-user-notes"
								placeholder="Notes"
								required
								value={student.notes}
								onChange={handleNotesChange}
							/>
						</Form.Group>
						<Form.Check
							type={"checkbox"}
							id={`isCurrent`}
							checked={student.is_current}
							onChange={handleCheckChange}
							label={`Are they in the current program?`}
						/>
						<Form.Group>
							<Button type="submit" variant="outline-success">
								{student.id ? "Edit Student" : "Add Student"}
							</Button>
							{student.id ? (
								<Button
									type="button"
									variant="outline-warning"
									onClick={clearForm}
								>
									Cancel
								</Button>
							) : null}
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			{/* <ModalComponent
				key={editingStudent ? editingStudent.id : null}
				onSaveStudent={onSaveStudent}
				editingStudent={editingStudent}
				onUpdateStudent={updateStudent}
			/> */}
		</>
	);
};
export default ModalComponent;
