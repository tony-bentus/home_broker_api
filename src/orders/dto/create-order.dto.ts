import { OrderStatus, OrderType } from "../entities/order.entity";

export class CreateOrderDto {
 @Prop({ type: mongoose.Schema.Types.Int32 })
    shares: number;
    partial: number;
    price: number; 
    wallet: string;  
    asset: string;
    type: OrderType; 
    status: OrderStatus; 
}
