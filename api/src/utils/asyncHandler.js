import { errorType } from "../middlewares/errorHandler.middleware.js";

export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        next(errorType.serverError(error.message)); 
    }
}