export async function obtenerClientes() {
  const URL = import.meta.env.VITE_API_URL;

  const respuesta = await fetch(URL);
  const resultado = await respuesta.json();
  return resultado;
}
