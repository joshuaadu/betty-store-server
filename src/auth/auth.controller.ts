import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckAuthDto } from './check-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() userCredentials: CheckAuthDto) {
    this.authService.login();
  }
}
