import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/BlueTechtonicaWord.png";

function MyNavBar(props) {
	return (
		<>
			<Navbar bg="dark" variant="dark" sticky="top">
				<Container>
					<Navbar.Brand href="/">
						<img
							src={Logo}
							height="30"
							className="d-lg-inline-block"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<div>
								<p>
									Made with <i class="fa-solid fa-heart"></i> by Roshanell
									Francisco
								</p>
							</div>
							<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
								<i class="fa-brands fa-github"> </i>
								<i class="fa-brands fa-twitter pl-14"></i>
								<i class="fa-brands fa-linkedin pl-14"></i>
							</div>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default MyNavBar;
