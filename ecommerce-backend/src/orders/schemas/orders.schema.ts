import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Orders {
  @Prop()
  products: string;

  @Prop()
  totalPrice: number;

  @Prop()
  nameUser: string;

  @Prop()
  adressUser: string;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
