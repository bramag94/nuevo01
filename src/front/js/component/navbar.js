import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const Navbar = () => {
	return (
		<Nav className="justify-content-center" activeKey="/home">
			<Nav.Item>
				<Nav.Link href="/home">Active</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};
