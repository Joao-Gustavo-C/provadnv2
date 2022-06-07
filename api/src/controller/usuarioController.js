import { Router } from "express";

const server = Router();

server.get('/vilao', async(req, resp) => {
    try {

    }
    catch (err) {
        resp.status(400).send ({
            erro : 'Ouve um erro'
        })
    }
})


