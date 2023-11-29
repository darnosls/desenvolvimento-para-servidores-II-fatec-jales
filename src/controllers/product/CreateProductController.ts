import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {

    async handler(req: Request, res: Response) {
        const {nome, preco, descricao, id_categoria} = req.body;
        const createProductService = new CreateProductService();

        console.log("Iniciando cadastro do produto");
        console.log(req.body);

        if(!req.file) {
            throw new Error("Erro no upload da imagem!");
        } 
            console.log("Cadastrando do produto");
            const {originalname, filename: banner} = req.file;

            const product = await createProductService.execute({
                    nome, 
                    preco, 
                    descricao, 
                    banner, 
                    id_categoria
                });
            
                console.log("Fim do cadastro do produto");
            return res.json(product);
        
    }

}

export { CreateProductController }