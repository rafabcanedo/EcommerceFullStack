import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ProductsService } from './products.service';
import { Products } from './schemas/products.schema';
import {
  CreateProductsDto,
  UpdateProductsDto,
} from './dto/create-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAllProducts(@Query() query: ExpressQuery): Promise<Products[]> {
    return this.productsService.findAll(query);
  }

  @Post()
  async createProducts(
    @Body()
    products: CreateProductsDto,
  ): Promise<Products> {
    return this.productsService.create(products);
  }

  @Get(':id')
  async getUsers(
    @Param('id')
    id: string,
  ): Promise<Products> {
    return this.productsService.findById(id);
  }

  @Put(':id')
  async updateProducts(
    @Param('id')
    id: string,
    @Body()
    users: UpdateProductsDto,
  ): Promise<Products> {
    return this.productsService.uptadeById(id, users);
  }

  @Delete(':id')
  async deleteUsers(
    @Param('id')
    id: string,
  ): Promise<Products> {
    return this.productsService.deleteById(id);
  }
}
