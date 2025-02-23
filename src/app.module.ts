import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletsModule } from './wallets/wallets.module';
import { OrdersModule } from './orders/orders.module';

const stringConnection = 'mongodb://root:root@localhost:27017/nest?directConnection=true&authSource=admin&authMechanism=DEFAULT';

@Module({
  imports: [MongooseModule.forRoot(stringConnection), AssetsModule, WalletsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
