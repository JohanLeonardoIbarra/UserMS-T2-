import { User } from 'Entity/User';

export class UserFactory {
  public static createUser(): User {
    return new User();
  }
}
