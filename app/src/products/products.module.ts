import { Module } from '@nestjs/common';
import { ProductsService } from './model/product';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
