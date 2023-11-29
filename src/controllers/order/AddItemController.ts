import { Request, Response } from 'express';
import { AddItemService } from '../../services/order/AddItemService';

class AddItemController {
    async handler(req: Request, res: Response) {
        const {quantidade, id_pedido, id_produto} = req.body;
        console.log("Inserindo produto ao pedido Nº: " + id_pedido);
        const addItemService = new AddItemService();

        const item = await addItemService.execute({ quantidade, id_pedido, id_produto });
        return res.json({item})

    }
}

export {AddItemController};