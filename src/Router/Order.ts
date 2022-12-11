import { Router } from 'express';
import { OrderController } from '../Controller/Order';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.post('', orderController.createOrder);

export default orderRouter;
