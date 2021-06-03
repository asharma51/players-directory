import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/plr_directory/'
})

export function getPlayers(){
    return http.get('/players');
}

export function getPlayerByID(id){
    return http.get('/players/'+id);
}