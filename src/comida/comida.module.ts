import { Module } from '@nestjs/common';
import { ComidaController } from './comida.controller';
import { ComidaService } from './comida.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { CategoryEntity } from './categoria.entity';
import { CommentEntity } from './coment.entity';
import { DeliveryEntity } from './delivery.entity';
import { OrderEntity } from './order.entity';
import { ProductoEntity } from 'src/comida/producto.entity';
import { ProviderEntity } from './provides.entity';
import { UserEntity } from './user.entity';
import { BillingEntity } from './billing.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ AddressEntity, CategoryEntity,CommentEntity,DeliveryEntity,OrderEntity,ProductoEntity,
      ProviderEntity,UserEntity,BillingEntity])
  ],
  controllers: [ComidaController],
  providers: [ComidaService]
})
export class ComidaModule {}
