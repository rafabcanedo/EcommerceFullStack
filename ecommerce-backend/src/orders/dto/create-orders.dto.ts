import { Products } from 'src/products/schemas/products.schema';

export class CreateOrdersDto {
  readonly products: Products[];
  readonly totalPrice: number;
  readonly description: string;
  readonly nameUser: string;
  readonly addressUser: string;
}

export class UpdateOrdersDto {
  readonly products: Products[];
  readonly totalPrice: number;
  readonly description: string;
  readonly nameUser: string;
  readonly addressUser: string;
}
