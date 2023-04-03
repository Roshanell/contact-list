import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListStudents from "./components/ListStudents";

function App() {
	return (
		<div>
			<MyNavBar />

			<div class="site">
				<div class="phone">
					<div class="phone_mic"></div>
					<div class="phone_screen">
						<ListStudents />
					</div>
					<div class="phone_button"></div>
				</div>
			</div>
		</div>

		// </div>
	);
}

export default App;
