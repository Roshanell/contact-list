import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as ioicons from "react-icons/io5";
import { Accordion } from "react-bootstrap";
const Contact = ({ student, toUpdate, toDelete }) => {
	const onUpdate = (toUpdateStudent) => {
		toUpdate(toUpdateStudent);
	};

	const onDelete = (toDeleteStudent) => {
		toDelete(toDeleteStudent);
	};

	return (
		// <Card>
		// 	<Card.Body>
		// 		<Card.Title>
		// 			{student.firstname} {student.lastname}
		// 		</Card.Title>
		// 		<Card.Title>{student.email}</Card.Title>
		// 		<Card.Title>{student.phone}</Card.Title>
		// 		<Card.Title>{student.notes}</Card.Title>
		// 		<Button
		// 			variant="outline-danger"
		// 			onClick={() => {
		// 				onDelete(student);
		// 			}}
		// 			style={{ padding: "0.6em", marginRight: "0.9em" }}
		// 		>
		// 			<ioicons.IoTrash />
		// 		</Button>
		// 		<Button
		// 			variant="outline-info"
		// 			onClick={() => {
		// 				onUpdate(student);
		// 			}}
		// 			style={{ padding: "0.6em" }}
		// 		>
		// 			{" "}
		// 			<ioicons.IoSync />
		// 		</Button>
		// 	</Card.Body>
		// </Card>

		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					{student.firstname} {student.lastname}
				</Accordion.Header>
				<Accordion.Body>
					<div>Phone: {student.phone}</div>
					<div>Email: {student.email}</div>
					<div>Notes: {student.notes}</div>
					<Button
						variant="outline-danger"
						onClick={() => {
							onDelete(student);
						}}
						style={{ padding: "0.6em", marginRight: "0.9em" }}
					>
						<ioicons.IoTrash />
					</Button>
					<Button
						variant="outline-info"
						onClick={() => {
							onUpdate(student);
						}}
						style={{ padding: "0.6em" }}
					>
						{" "}
						<ioicons.IoSync />
					</Button>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Contact;
