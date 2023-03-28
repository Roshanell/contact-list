import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListStudents from "./components/ListStudents";
import { Modal } from "react-bootstrap";
import ModalComponent from "./components/Modal";

function App() {
	return (
		<div>
			{/* <MyNavBar /> */}
			<div className="mockup-phone border-primary">
				<div className="camera"></div>
				<div className="display">
					<div className="artboard artboard-demo phone-1">
						<ListStudents />
					</div>
				</div>
			</div>
			{/* <div className="App"> */}

			{/* <ModalComponent /> */}
		</div>
		// </div>
	);
}

export default App;
