//////// Manipulação do modelo de dados //////

export let port = [];

/////// Para acrescentar mais dados
export const updateDados = (dados) => port = [...dados];

//////// Todos os dados, inclusive json = port[] ou updateDados
//const getData = () => portugal;

/////// Lugares que retornaria
export const returnTravel = () => port.filter(p => p.comeback === true)

/////// Lugares não voltaria
export const notReturnTravel = () => port.filter(p => p.comeback !== true)            