import { Request, response, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handler(req: Request, res: Response) {

        const user_id = req.user_id;

        console.info("ID: ", user_id)
        const detailUserService = new DetailUserService();
        
        const user = await detailUserService.execute(user_id);
        return res.json(user);

    }
}

export {DetailUserController}