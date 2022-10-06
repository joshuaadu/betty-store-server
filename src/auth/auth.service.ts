import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login() {
    return 'You are logged in!';
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup() {
    return 'You have signed up';
  }
}
