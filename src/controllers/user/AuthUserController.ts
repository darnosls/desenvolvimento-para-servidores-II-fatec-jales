import { Request, Response } from 'express';
import { AuthUserService } from '../../services/user/AuthUserServices';

class AuthUserController {

    async handler(req: Request, res: Response) {
        console.log(req);
        const { email, senha } = req.body;
        const createUserService = new AuthUserService();
        
        const auth = await createUserService.execute({ email, senha });
        return res.json(auth);

    }

}

export { AuthUserController }