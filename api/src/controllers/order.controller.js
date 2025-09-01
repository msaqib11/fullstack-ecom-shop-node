import { asyncHandler } from "../utils/asyncHandler.js"
import { Order } from "../models/index.js"
import { errorType } from "../middlewares/errorHandler.middleware.js";
import mongoose from "mongoose";


export const createOrder = asyncHandler(async (req, res, next) => {
    const order = await new Order(req.body).save();
    res.status(201).json(order);
})

export const updateOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(order);
})


export const deleteOrder = asyncHandler(async (req, res, next) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
})

export const getOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(errorType.notFound("Order not found"));
    }
    res.status(200).json(order);
})

export const getAllOrders = asyncHandler(async (req, res, next) => {
    const allOrders = await Order.find({}).sort({ createdAt: -1 });
    res.status(200).json(allOrders);
})


export const monthlyIncome = asyncHandler(async (req, res, next) => {
  const productId = req.query.pid;
  const currentDate = new Date();

  const lastMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
  const monthBeforeLastMonth = new Date(
    new Date().setMonth(lastMonth.getMonth() - 1)
  );

  const match = {
    createdAt: { $gte: monthBeforeLastMonth },
  };

  if (productId) {
    match["products"] = {
      $elemMatch: { productId: new mongoose.Types.ObjectId(productId) }, // ensure type match
    };
  }

  const monthlyIncome = await Order.aggregate([
    { $match: match },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
    { $sort: { _id: -1 } },
  ]);

  res.status(200).json(monthlyIncome);
});
