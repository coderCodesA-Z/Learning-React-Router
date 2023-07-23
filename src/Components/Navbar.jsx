import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<span>
				<h1>
					<NavLink
						end
						to="/"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						React Router DOM
					</NavLink>
				</h1>
			</span>
			<ul>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
