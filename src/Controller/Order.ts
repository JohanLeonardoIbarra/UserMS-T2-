import { Request, Response } from 'express';
import AppDataSource from '../index';
import { Order } from '../Entity/Order';
import { Points } from 'Webhook/Points';
import { Delivery } from '../Webhook/Delivery';

export class OrderController {
  async createOrder(req: Request, res: Response) {
    const { user, product, unitPrice, quantity } = req.body;

    const orderRepository = AppDataSource.getRepository(Order);

    const order = new Order();
    order.user = user;
    order.product = product;
    order.quantity = quantity;
    order.unitPrice = unitPrice;

    orderRepository.save(order);

    Points.addPoints(user);
    const deliverMessage = await Delivery.createRequest(
      user,
      product,
      quantity
    );

    res.send(deliverMessage);
  }
}
