import { Router } from "express";

import {vilao} from '../repository/usuarioRepository.js';

const server = Router();

server.get('/usuario/vilao', async(req, resp) => {
    try {
        const a = req.body;
        const x = vilao(a);
        resp.send(x)
        

    }
    catch (err) {
        resp.status(400).send ({
            erro : 'Ouve um erro'
        })
    }
})


export default server;