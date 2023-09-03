/** @format */

import axios from "axios";

export const api = axios.create({
	baseURL: "https://react-router-api-jet.vercel.app/",
});

export const buscar = async (url, setData) => {
	const respuesta = await api.get(url);
	setData(respuesta.data);
};
