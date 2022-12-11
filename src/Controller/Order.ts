import { Request, Response } from 'express';
import AppDataSource from '../index';
import { Order } from '../Entity/Order';
import { Points } from 'Webhook/Points';

const orderRepository = AppDataSource.getRepository(Order);
export class OrderController {
  createOrder(req: Request, res: Response) {
    const { user, product, unitPrice, quantity } = req.body;

    const order = new Order();

    order.user = user;
    order.product = product;
    order.quantity = quantity;
    order.unitPrice = unitPrice;

    orderRepository.save(order);

    Points.addPoints(user);

    res.send({ success: true });
  }
}
