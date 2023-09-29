import { Category } from '../schemas/products.schema';

export class CreateProductsDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly stock: number;
  readonly image: string;
  readonly category: Category;
}

export class UpdateProductsDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly stock: number;
  readonly image: string;
  readonly category: Category;
}
