import { Link, NavLink } from "react-router-dom";
import profilepic from "../assets/img/profile-pic.png";
import "../assets/css/componentes/header.css";

const NavBar = () => {
	return (
		<div className="header-container">
			<div className="logo__container">
				<Link to="/" className="flex flex--center">
					<img className="header__logo" src={profilepic} alt="doguito" />
					<h1 className="header__title">SofiDev</h1>
				</Link>
			</div>

			<nav className="menu-header">
				<ul className="menu-items">
					<li>
						<NavLink className="menu-item" to="/">
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink className="menu-item" to="/sobre">
							Sobre
						</NavLink>
					</li>
					<li>
						<NavLink className="menu-item" to="/contacto">
							Contacto
						</NavLink>
					</li>
					<li>
						<Link className="menu-item menu-item--entrar" to="">
							Entrar
						</Link>
					</li>
				</ul>
			</nav>
			<div className="menu-header-background"></div>
		</div>
	);
};

export default NavBar;
