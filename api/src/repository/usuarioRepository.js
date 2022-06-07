import {con} from '../controller/connection.js' 


export async function vilao(vilao) {
    const comando = 
    `SELECT`;

    const [a] = await con.query (comando, [vilao])
    return a[0];
}
