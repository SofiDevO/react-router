
import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts";

const SubCategoria = () => {
	const { subcategorias } = useParams();
	return <ListPosts url={`/posts?subcategorias=${subcategorias}`} />;
};

export default SubCategoria;

