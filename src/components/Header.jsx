import { Link } from "react-router-dom";

import "../assets/css/componentes/header.css";
import profilepic from "../assets/img/profile-pic.png";

const Header = () => {
	return (
		<header className="header container">
			<div className="menu-hamburguer">
				<span className="menu-hamburguer__icon"></span>
			</div>
			<div className="header-container">
				<Link to="/" className="flex flex--center">
					<img className="header__logo" src={profilepic} alt="doguito" />
					<h1 className="header__title">SofiDev</h1>
				</Link>
			</div>
			<nav className="menu-header">
				<ul className="menu-items">
					<li>
						<Link className="menu-item" to="/">
							Blog
						</Link>
					</li>
					<li>
						<Link className="menu-item" to="/sobre">
							Sobre
						</Link>
					</li>
					<li>
						<Link className="menu-item" to="/contacto">
							Contacto
						</Link>
					</li>
					<li>
						<Link className="menu-item menu-item--entrar" to="">
							Entrar
						</Link>
					</li>
				</ul>
			</nav>
			<div className="menu-header-background"></div>
		</header>
	);
};

export default Header;
