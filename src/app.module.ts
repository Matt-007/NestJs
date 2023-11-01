import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComidaModule } from './comida/comida.module';
import { ComidaController } from './comida/comida.controller';
import { ComidaService } from './comida/comida.service';


@Module({
  imports: [
    ComidaModule,
    TypeOrmModule,
    VentasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'ventas',
      autoLoadEntities:true,
      synchronize:true,
      dropSchema: true
      }
    ),
    
  ],
  controllers: [
    ComidaController,
    AppController
  ],
  providers: [AppService, ComidaService],
})
export class AppModule {}