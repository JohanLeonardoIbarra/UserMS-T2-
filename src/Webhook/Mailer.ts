import axios from 'axios';

export class Mailer {
  static welcomeMail(email: string) {
    axios.post('http://localhost:8081/mail/send', {
      to: email,
      subject: 'Register successful',
      text: 'Welcome to the app',
      html: '',
    });
  }
}
