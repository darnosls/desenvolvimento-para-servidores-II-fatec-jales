import express, {Request, Response, NextFunction, Router} from "express";
import { router } from './routes';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

const app = express();


app.use(express.json());
app.use(cors());

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);


//midleware para tratamento de errs nas rotas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(">>>>>>>>>>>>>>>>");
    console.log(">>>>>>>>>>>>>>>>");
    console.log(">>>>>>>>>>>>>>>>");
    if(err instanceof Error) {
        //se o valor recebido for uma instacia deo tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
});

app.listen(3333, () => console.log('Servidor ON'));

