import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export { MONGODB_URI, PORT, NODE_ENV, JWT_SECRET, JWT_EXPIRES_IN };