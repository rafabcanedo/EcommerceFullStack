import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Products } from 'src/products/schemas/products.schema';

@Schema({
  timestamps: true,
})
export class Orders {
  @Prop()
  products: Products[];

  @Prop()
  totalPrice: number;

  @Prop()
  nameUser: string;

  @Prop()
  addressUser: string;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
