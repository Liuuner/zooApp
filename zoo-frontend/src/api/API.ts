import axios from "axios";
import {CustomerModel, TicketModel} from "src/model/types.ts";

const BASE_URL = "http://localhost:8080/api"

const getCustomerByName = (name: string): Promise<CustomerModel> => {
    return axios.get(`${BASE_URL}/customers/${name}`)
        .then(res => {
            return res.data
        })
}

const createTicket = (ticket: TicketModel) => {
    return axios.post(`${BASE_URL}/tickets`, ticket)
}

export {
    getCustomerByName,
    createTicket
}