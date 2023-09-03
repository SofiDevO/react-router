/** @format */

import "../assets/css/componentes/sobre.css";
import coffe from "../assets/img/cup-of-coffe.webp";

const Sobre = () => {
	return (
		<main>
			<div className="container">
				<h2 className="title-page ">Acerca de Mí</h2>
			</div>
			<section className="container flex flex--center">
				<article className="card">
					<div className="sobre__contenedor-titulo">
						<h1 className="sobre__titulo">Holi 🐣</h1>
					</div>

					<div className="coffe">
						<div className="sobre__textos">
							<p className="sobre__contenido">Yo soy Angela Sofia.</p>
							<p className="sobre__contenido">
								Frontend developer, amante del café, el código y las conchitas
								de choclate
							</p>
						</div>
						<img src={coffe} alt="cup of coffe" />
					</div>
				</article>
			</section>
		</main>
	);
};

export default Sobre;
