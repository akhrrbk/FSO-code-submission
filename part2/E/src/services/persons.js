import axios from "axios";
const baseurl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseurl)
    return req.then(res => res.data)
}

const create = (newsubmission) => {
    const req = axios.post(baseurl, newsubmission)
    return req.then(res => res.data)
}

const update = (id, changedPerson) => {
    const req = axios.put(`${baseurl}/${id}`, changedPerson)
    return req.then(res => res.data)
}

const remove = (id) => {
    const req = axios.delete(`${baseurl}/${id}`)
    return req.then(res => res.data)
}

export default { getAll, create, update, remove }