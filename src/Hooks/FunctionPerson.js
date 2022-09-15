import axios from "axios";

const allPerson = async (state) => {
    const call = await axios.get(`https://swapi.dev/api/people`)
    state(call.data.results)
}

const singlePerson = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/people/${id}/`)
    const data = peticion.json()
    return data
}

export {
    allPerson,
    singlePerson
}