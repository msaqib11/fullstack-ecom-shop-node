import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/index.js";
import { errorType } from "../middlewares/errorHandler.middleware.js";


export const updateUser = asyncHandler(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true })

    const { password, ...otherInfo } = updatedUser._doc;
    res.status(200).json(otherInfo)
})

export const deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted")
})

export const getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(errorType.notFound("User not found"));
    }
    const { password, ...otherInfo } = user._doc;
    res.status(200).json(otherInfo);
})

export const getAllUsers = asyncHandler(async (req, res, next) => {
    const { newUsers } = req.query;
    const allUsers = newUsers ? await User.find().sort({ createdAt: -1 }).limit(5) : await User.find({})
    res.status(200).json(allUsers);
})

export const getUsersMonthlyStats = asyncHandler(async (req, res, next) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    const monthlyStates = await User.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: lastYear
                }
            }
        },
        {
            $project: {
                month: {
                    $month: "$createdAt"
                }
            }
        },
        {
            $group: {
                _id: "$month",
                total: {
                    $sum: 1
                }
            }
        },
        // {$project:{_id:0,month:"$_id",total:1}}

    ])
    res.status(200).json(monthlyStates);
})