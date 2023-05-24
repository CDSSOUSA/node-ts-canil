import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObjects';
import {Pet as PetModel} from '../models/pet';

export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = PetModel.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query

    });
}