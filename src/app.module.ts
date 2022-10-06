import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SalesModule } from './sales/sales.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, ProductModule, UserModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
