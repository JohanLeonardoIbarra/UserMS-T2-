import { UserController } from 'Controller/User';
import { Router } from 'express';
import validateToken from 'Middleware/Auth';

const UserRouter = Router();

UserRouter.post('/', UserController.createUser);
UserRouter.post('/login', UserController.login);
UserRouter.get('/check', validateToken, UserController.check);

export default UserRouter;
