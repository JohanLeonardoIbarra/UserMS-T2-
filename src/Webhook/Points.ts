import axios from 'axios';

export class Points {
  static addPoints(email: string) {
    axios.post('http://localhost:8082/points', {
      user: email,
    });
  }
}
