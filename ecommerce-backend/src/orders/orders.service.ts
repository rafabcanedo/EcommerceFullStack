import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Orders } from './schemas/orders.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders.name)
    private ordersModel: mongoose.Model<Orders>,
  ) {}

  async findAll(query: Query): Promise<Orders[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const products = await this.ordersModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async create(products: Orders): Promise<Orders> {
    const result = await this.ordersModel.create(products);
    return result;
  }

  async findById(id: string): Promise<Orders> {
    const users = await this.ordersModel.findById(id);

    if (!users) {
      throw new NotFoundException('Users not found!');
    }

    return users;
  }

  async uptadeById(id: string, users: Orders): Promise<Orders> {
    return await this.ordersModel.findByIdAndUpdate(id, users, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Orders> {
    return await this.ordersModel.findByIdAndDelete(id);
  }
}
