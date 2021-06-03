import axios from 'axios';

const baseURL = 'http://localhost:8080/plr_directory';

export function getPlayers(){
    return axios.get(`${baseURL}/players`);
}

export function getPlayerByID(id){
    return axios.get(`${baseURL}/players/${id}`);
}

export function deletePlayer(id){
    return axios.delete(`${baseURL}/players/${id}`);
}