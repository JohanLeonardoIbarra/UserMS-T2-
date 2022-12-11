import 'reflect-metadata';
import { Server } from 'Server/Server';
import { DataSource } from 'typeorm';
import { User } from './Entity/User';
import { Order } from './Entity/Order';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'castor.db.elephantsql.com',
  port: 5432,
  username: 'ranzrqem',
  password: 'BOt6B1_FRbHjPbE_vgWDakqD_O_qeyZb',
  database: 'ranzrqem',
  entities: [User, Order],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    const app = new Server();
    app.init(8080);
  })
  .catch(error => console.log(error));

export default AppDataSource;
