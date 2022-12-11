import JWT from 'jsonwebtoken';

export class Token {
  public static create(email: string): string {
    return JWT.sign({ email }, 'secret', {
      expiresIn: '3h',
    });
  }

  public static verify(token: string) {
    return JWT.verify(token, 'secret');
  }
}
