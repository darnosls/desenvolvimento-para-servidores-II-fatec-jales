import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';


interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, resp: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return resp.status(401).end();
    }

    console.log(authToken);
    const [,token] = authToken.split(" ");

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        req.user_id = sub;



        console.info(sub);
        return next();
    } catch (err) {
        return resp.status(401).end();
    }
}