import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const nav_Links = [
	{
		display: "Home",
		path: "/",
	},
	{
		display: "Skills",
		path: "/skills",
	},

	{
		display: "Projects",
		path: "/projects",
	},
];

export const NavBar = () => {
	
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	

	return (
		<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="/">
					<img src={logo} alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link>
							{nav_Links.map((item, index) => (
								<NavLink to={item.path} key={index} className="navbar-link">
									{item.display}
								</NavLink>
							))}
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/muhammad-ammar-hassan-4a70ba156/">
								<img src={navIcon1} alt="" />
							</a>
							<a href="https://web.facebook.com/iammrammar/">
								<img src={navIcon2} alt="" />
							</a>
							<a href="https://www.instagram.com/m.ammar.leo/">
								<img src={navIcon3} alt="" />
							</a>
						</div>
						<button  className="contact" onClick={() => console.log("connect")}>
						<NavLink smoth  to='./connect'><span >Let’s Connect </span></NavLink>	
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
