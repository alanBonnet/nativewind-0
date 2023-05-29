const getAllPjs = async (urlBase, limite=10,desde=undefined) => {
    try {
        let pjs = []
        const inicio = desde ?? 1;//se puede traer un numero de inicio de personajes desde 1 ó el que tenga valor "desde"
        const final = limite<=inicio ? limite+=10 : limite;// en caso de que el limite sea menor a inicio da 10 personajes de más a partir de "desde"
        for (let i = inicio; i <= final; i++) {
            const request = await fetch(`${urlBase}/${i}`)
            const response = await request.json();
            pjs.push(response)
        }
        return await Promise.all(pjs)
    } catch (error) {
        const request = await fetch(`${urlBase}/${1}`)
        const response = await request.json();
        return response
    }

}
const esVillano = (nombre, siEs) => {
    return nombre?.toLowerCase()?.includes(siEs.toLowerCase())??false;
}
const detectarMultiplesVillanos = (nombre,ees) => {
    const villaneitor = [];
        for(let esVillanoxd of ees){
            if(esVillano(nombre,esVillanoxd)){
                villaneitor.push(nombre)
            }
        }
    return villaneitor.length > 0
}
const diccionario = {
    getAllPjs: getAllPjs,
    "marcarComoVillano": detectarMultiplesVillanos
}

export default diccionario