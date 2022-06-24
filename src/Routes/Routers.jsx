import { App } from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { MailchimpForm } from "../components/MailchimpForm";

import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={[<Banner />, <Skills  />, <Projects />]} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/connect" element={<Contact />} />
			
		</Routes>
	);
};

export default Routers;

// {nav_Links.map((item, index) => (
//             <NavLink
//               className="nav"
//               to={item.path}
//               key={index}
//             >
//               {item.display}
//             </NavLink>					
