import pixel from "../assets/img/sofidev_laptop.gif"
import "../assets/css/404.css"

const Page404 = ()=>{
    return (
			<main className="container flex flex--center flex--column">
				<img className="sofi" src={pixel} alt="" />
				<p className="notfound-text">Esta página no existe</p>
			</main>
		);
}


export default Page404