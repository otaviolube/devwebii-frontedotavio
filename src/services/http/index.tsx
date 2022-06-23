import axios from 'axios';

export async function getEmpresas(){
    const response = await axios.get('http://localhost:4000/empresas');
    if(response) return response;
    else return null;
}