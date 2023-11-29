import { Request, Response } from 'express';
import { ListProductService } from '../../services/product/ListProductService';


class ListProductController {
    async handler(req: Request, res: Response) {
        console.log("Iniciando listagem de produtos por categoria")
        const id_categoria = req.query.id_categoria as string;

        const listByCategory = new ListProductService();

        const product = await listByCategory.execute({id_categoria});

        return res.json(product);
    }
}

export {ListProductController}