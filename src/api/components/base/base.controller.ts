import { Request, Response, response } from "express";
import { App } from "../../app";


import express from 'express';


export class BaseController {

    //retorna somente status 200 e a mensagem de funcionamento da api
public index(req: Request, res: Response) {
    res.status(200).json({message: 'API running...'});
};

//retorna informações sobre a api
public info(req: Request, res: Response) {
    res.status(200).json({
        name:'API REST - Finances360',
        mode: 'development',
        version: '1.0.0'
    });
};

public sobre(req: Request, res: Response){
    res.status(200).json({
        name: "Amanda Alves",
        email: "amanda123@gmail.com",
        github: "github.com/AmandaVED"
    });
};

public getUsuario(req:Request, res:Response){
    res.status(200).json({
     
    });
};

public postUsuarios(req:Request, res:Response){
    res.status(201).json({

        name: "nome",
        email: "email",
        user: "usuario",
        password: "senha",

        message: "sucess"
        
    })
}

public id(req:Request, res:Response){
    res.status(200).json({

        message: 'Função update'
    });
};

public idApagar(req:Request, res:Response){
    res.status(200).json({
        message: 'função Destroy'
    })
}

}

