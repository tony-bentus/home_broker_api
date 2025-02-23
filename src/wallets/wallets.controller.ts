import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { CreateWalletAssetDto } from './dto/create-wallet-asset.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletsService.create(createWalletDto);
  }

  @Get()
  findAll() {
    return this.walletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletsService.remove(id);
  }

  // WalletAsset
  @Post('assets')
  createWalletAsset(@Body() createWalletAssetDto: CreateWalletAssetDto) {
    return this.walletsService.createWalletAsset(createWalletAssetDto);
  }

  @Get('assets')
  findAllWalletAsset() {
    return this.walletsService.findAllWalletAsset();
  }

  @Get('assets/:id')
  findOneWalletAsset(@Param('id') id: string) {
    return this.walletsService.findOneWalletAsset(id);
  }


}
