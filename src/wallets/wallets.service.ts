import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';
import { WalletAsset } from './entities/wallet-asset.entity';

@Injectable()
export class WalletsService {

  constructor(
    @InjectModel(Wallet.name) private walletSchema: Model<Wallet>,
    @InjectModel(WalletAsset.name) private walletAssetSchema: Model<WalletAsset>
  ){}

  // WalletAsset

  create(createWalletDto: CreateWalletDto) {
    return this.walletSchema.create(createWalletDto)
  }

  findAll() {
    return this.walletSchema.find()
  }

  findOne(id: string) {
    return this.walletSchema.findById(id)
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: string) {
    return `This action removes a #${id} wallet`;
  }

  // WalletAsset
  createWalletAsset(data: {walletId: string, assetId: string, shares: number}) {
    return this.walletAssetSchema.create(
      {
        wallet: data.walletId,
        asset: data.assetId,
        shares: data.shares,
      }
    )
  }

  findAllWalletAsset() {
    return this.walletAssetSchema.find()
  }

  findOneWalletAsset(id: string) {
    return this.walletAssetSchema.findById(id)
  }

}
