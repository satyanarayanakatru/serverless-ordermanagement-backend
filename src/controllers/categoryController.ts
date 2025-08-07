import { Request, Response } from 'express';
import Category from '../models/categoryModel';

export const getCategories = async (req: Request, res: Response) => {
                const categories = await Category.find();
                res.json(categories);
};
