import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  TECNOLOGIA = 'Tecnologia',
  LAZER = 'Lazer',
  OUTROS = 'Outros',
}

@Schema({
  timestamps: true,
})
export class Products {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  stock: number;

  @Prop()
  image: string;

  category: Category;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
