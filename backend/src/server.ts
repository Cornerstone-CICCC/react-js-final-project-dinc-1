import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import productRouter from './routes/productRoutes';
import checkoutRouter from './routes/checkoutRoutes';
import orderRouter from './routes/orderRoutes';
import cartRouter from './routes/cartRoutes';

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.FRONT_URL || 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

// Define Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API Running');
});
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/checkout', checkoutRouter);
app.use('/orders', orderRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
