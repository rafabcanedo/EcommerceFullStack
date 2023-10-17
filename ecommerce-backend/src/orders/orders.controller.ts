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
import { OrdersService } from './orders.service';
import { Orders } from './schemas/orders.schema';
import { CreateOrdersDto, UpdateOrdersDto } from './dto/create-orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async getAllOrders(@Query() query: ExpressQuery): Promise<Orders[]> {
    return this.ordersService.findAll(query);
  }

  @Post()
  async createOrders(
    @Body()
    orders: CreateOrdersDto,
  ): Promise<Orders> {
    return this.ordersService.create(orders);
  }

  @Get(':id')
  async getOrders(
    @Param('id')
    id: string,
  ): Promise<Orders> {
    return this.ordersService.findById(id);
  }

  @Put(':id')
  async updateOrders(
    @Param('id')
    id: string,
    @Body()
    orders: UpdateOrdersDto,
  ): Promise<Orders> {
    return this.ordersService.uptadeById(id, orders);
  }

  @Delete(':id')
  async deleteOrders(
    @Param('id')
    id: string,
  ): Promise<Orders> {
    return this.ordersService.deleteById(id);
  }
}
