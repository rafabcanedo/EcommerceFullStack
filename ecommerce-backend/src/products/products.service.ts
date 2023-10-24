import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Products } from './schemas/products.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name)
    private productsModel: mongoose.Model<Products>,
  ) {}

  async findAll(query: Query): Promise<Products[]> {
    const resPerPage = 20;
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

    const products = await this.productsModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async create(products: Products): Promise<Products> {
    const result = await this.productsModel.create(products);
    return result;
  }

  async findById(id: string): Promise<Products> {
    const users = await this.productsModel.findById(id);

    if (!users) {
      throw new NotFoundException('Users not found!');
    }

    return users;
  }

  async uptadeById(id: string, users: Products): Promise<Products> {
    return await this.productsModel.findByIdAndUpdate(id, users, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Products> {
    return await this.productsModel.findByIdAndDelete(id);
  }
}
