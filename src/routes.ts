import {Router} from "express";
import multer from 'multer'; 
import {CreateUserController} from './controllers/user/CreateUserController';
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from './controllers/cotegory/CreateCategoryController'
import { ListCategoryController } from './controllers/cotegory/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListProductController } from './controllers/product/ListProductController'
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'
import { SendOrderController } from './controllers/order/SendOrderController'
import { FinalizeOrderController } from './controllers/order/FinalizeOrderController'
import { ListOrderController } from './controllers/order/ListOrderController'
import { OrderDetailsController } from './controllers/order/OrderDetailsController'
import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import {isAuthenticated} from './middlewares/isAuthenticated'

import uploadConfig from './config/multer';
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//--------- ROTAS PARA USUÁRIO ---------//
router.post('/user', new CreateUserController().handler);
router.post('/session', new AuthUserController().handler);
router.get('/userinfo', isAuthenticated, new DetailUserController().handler);

//--------- ROTAS PARA CATEGORIA ---------//

router.post('/category', isAuthenticated, new CreateCategoryController().handler);
router.get('/listcategory', isAuthenticated, new ListCategoryController().handler);

//--------- ROTAS PARA PRODUTO ---------//
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handler)
router.get('/category/product', isAuthenticated, new ListProductController().handler);

//--------- ORDERS
router.post('/order', isAuthenticated, new CreateOrderController().handler);
router.delete('/delete/order', isAuthenticated, new RemoveOrderController().handler);
router.put('/order/send', isAuthenticated, new SendOrderController().handler);
router.put('/order/finalize', isAuthenticated, new FinalizeOrderController().handler);
router.get('/listorder', isAuthenticated, new ListOrderController().handler);
router.get('/orderdetails', isAuthenticated, new OrderDetailsController().handler);

//--------- ADICIONA ITEM NO PEDIDO
router.post('/order/add', isAuthenticated, new AddItemController().handler)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handler)

export{router};